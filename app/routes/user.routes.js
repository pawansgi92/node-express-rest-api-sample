/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




module.exports = (app) => {
    
    const user = require('../controllers/user.controller.js');
    app.post('/user', user.create);
    //app.get('/notes', notes.findAll);
    app.get('/user/:userId', user.findOne);
    app.put('/user/:userId', user.update);
    //app.delete('/notes/:noteId', notes.delete);
}