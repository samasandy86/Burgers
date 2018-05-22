let orm = require("../config/orm.js");


let burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    createBurger: function(burgerName, callback){
        orm.createBurger("burgers", burgerName, function(res){
        callback(res);
        })
    },
    updateBurger: function(burgerID, callback){
        orm.updateBurger("burgers", burgerID, function(res){
            callback(res);
        })
    },
    delete: function(condition, callback) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }
}