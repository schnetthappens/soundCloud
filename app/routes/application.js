import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    SC.initialize({
      client_id: "f3295f8663e05856bfced82ece0ebc96"
    });
    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.get('/tracks/128350315', function(song) {
          resolve(song);
          console.log(song);
      });
    });
  }
});
