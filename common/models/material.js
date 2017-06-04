'use strict';

module.exports = function(Material) {
    var app = require('../../server/server');
    Material.observe('before save', function updateTimestamp(ctx, next) {
        var code = 1;
        var id = 0;
        if(ctx.isNewInstance){
            if(ctx.instance){
                id = ctx.instance.entityId;
            }else{
                id = ctx.data.entityId;
            }
            Material.find({where: { entityId: id },order: 'code DESC', limit: 1,fields: {code: true}}, function(err,materials){
                if(err){
                    return next(err);
                }

                if(materials.length){
                    code = materials[0].code + 1;
                }
                if(ctx.instance){
                    ctx.instance.code = code;
                }else{
                    ctx.data.code = code;
                }
                return next();
            }); 
        }else{
            next();
        }        
    });
};
