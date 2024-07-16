func = require("./function");
objlist = require("./objects");

console.log(objlist);

for ([label, obj_name] of Object.entries(objlist.people)) {
  func(obj_name);
}
