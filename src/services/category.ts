import { Category as Build } from "@prisma/client";
import { Category as Controller } from "../controllers";
import { ServiceFactory } from "../helpers";
class Service extends ServiceFactory<Build> { }
export default new Service(Controller);