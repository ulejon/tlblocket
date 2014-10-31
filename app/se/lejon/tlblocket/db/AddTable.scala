package se.lejon.tlblocket.db

import scala.slick.driver.PostgresDriver.simple._

// ----------------------------------------------------------------------------------------------
object AddTable {

  class AddTableDefinition(tag: Tag) extends Table[Add](tag, "add") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

    def title = column[String]("title")

    def * = (id, title) <>(Add.tupled, Add.unapply)
  }

  val Adds = TableQuery[AddTableDefinition]


}

case class Add(id: Long, title: String)