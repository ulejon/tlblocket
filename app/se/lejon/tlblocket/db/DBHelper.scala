package se.lejon.tlblocket.db

import play.api.db.DB
import scala.slick.driver.PostgresDriver.simple._
import play.api.Play.current

object DBHelper {
  lazy val db = Database.forDataSource(DB.getDataSource())

  def withSession[T](f : Session => T) = db.withSession(f)

  def withTransaction[T](f : Session => T) = db.withTransaction(f)
}
