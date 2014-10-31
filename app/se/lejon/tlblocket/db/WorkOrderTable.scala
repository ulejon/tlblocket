package se.lejon.tlblocket.db

import scala.slick.driver.PostgresDriver.simple._

// ----------------------------------------------------------------------------------------------
object WorkOrderTable {

  class WorkOrderTableDefinition(tag: Tag) extends Table[WorkOrder](tag, "work_order") {
    def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)

    def test = column[Long]("TEST")

    def * = (id.?, test) <>(WorkOrder.tupled, WorkOrder.unapply)
  }

  val WorkOrders = TableQuery[WorkOrderTableDefinition]


}

case class WorkOrder(id: Option[Long], test: Long)