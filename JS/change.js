function get(key) {
    if (key in sourceObject) {
      return sourceObject[key];
    } else {
      return undefined;
    }
}

function set(key, value) {
    sourceObject[key] = value;
    return value;
}

console.log(get("name"));
console.log(get("gender")); 
  
set("age", 26);
console.log(get("age"));
  