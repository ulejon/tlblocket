package se.lejon.tlblocket.service

import se.lejon.tlblocket.db.{Add, AddTable, DBHelper}

import scala.slick.driver.PostgresDriver.simple._

object AddService {

  case class Adds(totalCount: Int, items: List[Add])

  /**
   *
   * @param count number of items to return
   * @param offset Offset for result. Starts at 0
   * @return
   */
  def getAdds(count: Int, offset: Int): Adds = DBHelper.withSession { implicit session =>
    val start = count * offset

    val findQuery = AddTable.Adds
    val totalCount = findQuery.length.run
    val items = findQuery.
      drop(start).
      take(count).
      list
    Adds(totalCount, items)
  }

}
