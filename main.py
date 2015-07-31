import webapp2
import os
import jinja2
import urllib2  
import datetime
from google.appengine.ext import ndb
import logging
import json

player_ancestor = ndb.Key('Player', "high_score")

class Player(ndb.Model):
    name = ndb.StringProperty(required=True) 
    collectednum = ndb.IntegerProperty(required=True)
    date_created = ndb.DateProperty(auto_now_add=True)      

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/main.html')
        self.response.write(template.render())

class GameHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/game.html')
        self.response.write(template.render())  

class CreatePlayer(webapp2.RequestHandler):
    def post(self):
        name = self.request.get('player')
        collectednum = self.request.get('collectednum')
        collected = int(collectednum)
        date = datetime.datetime.now()
        player = Player(name=name, collectednum = collected, parent = player_ancestor)
        player.date_created = date
        player.put()
        self.redirect('/highscore')


class EndHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/end.html')
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))

class HighScoreHandler(webapp2.RequestHandler):
    def get(self):
        query = Player.query(ancestor=player_ancestor)
        player_data = query.fetch()
        player_data_sorted = sorted(player_data, key=lambda player: -player.collectednum)
        template_vars = {'players':player_data_sorted}
        template = jinja_environment.get_template('templates/highscore.html')
        self.response.write(template.render(template_vars))


jinja_environment = jinja2.Environment(loader=
jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/game', GameHandler),
    ('/end', EndHandler),
    ('/highscore', HighScoreHandler),
    ('/player', CreatePlayer)
], debug=True)