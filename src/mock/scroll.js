let Mock = require("mockjs");
let data = Mock.mock({
  "array|50": [
    {
      "icon|+1": [
        require("@/assets/logo.png"),
        require("@/assets/logo.png"),
        require("@/assets/logo.png"),
      ],
      "name|+1": ["炒饭", "炒饼", "炒面"],
      "description|+1": ["好", "很好", "非常好"],
      "sellCount|+1": [66, 66, 66],
      "rating|+1": ["99", "99", "99"],
      "price|+1": [66, 66, 66],
      "oldPrice|+1": [66, 66, 66],
    },
  ],
});

export { data };
