package controllers

import play.api.libs.json.{Json, JsValue}
import play.api.mvc.{Action, Controller}
import se.lejon.tlblocket.service.AddService

object Adds extends Controller {

  def getAdds(count: Int, page: Int) = Action { implicit request =>
    val adds = AddService.getAdds(count, page - 1)


    val json: JsValue = Json.obj(
      "totalCount" -> adds.totalCount,
      "items" -> adds.items.map { add =>
          Json.obj(
            "id" -> add.id,
            "title" -> add.title,
            "description" -> add.description
          )
        }
    )



    Ok(json)
  }


}
