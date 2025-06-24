import UseData from "./useData";
import { Platform } from "./useGame";
const UsePlatforms = () => UseData<Platform>("/platforms/lists/parents");

export default UsePlatforms;
