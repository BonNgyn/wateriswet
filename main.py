<<<<<<< HEAD

=======
>>>>>>> 9ff3acde6696ae35d2a882bcd22aff3b8eae4dac
import webapp2
import os
import jinja2
import urllib2  
import datetime
from google.appengine.ext import ndb
import logging
import json

class Player(ndb.Model):
    name = ndb.StringProperty(required=True) 
    collectednum = ndb.StringProperty(required=True)
    date_created = ndb.DateTimeProperty(auto_now_add=True)      

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/main.html')
        self.response.write(template.render())

class GameHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/game.html')
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))  

class CreatePlayer(webapp2.RequestHandler):
    def post(self):
<<<<<<< HEAD
        player = self.request.get('player')

class EndHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/end.html')
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))
=======
>>>>>>> 9ff3acde6696ae35d2a882bcd22aff3b8eae4dac
        name = self.request.get('player')
        collectednum = self.request.get('collectednum')
        date = datetime.datetime.now()
        player = Player(name=name, collectednum = collectednum)
        player.date_created = date
        player.put()
<<<<<<< HEAD

=======
        template = jinja_environment.get_template('templates/highscore.html')
        self.response.write(template.render())


class EndHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/end.html')
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))
>>>>>>> 9ff3acde6696ae35d2a882bcd22aff3b8eae4dac

class HighScoreHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/highscore.html')
        self.response.write(template.render())


jinja_environment = jinja2.Environment(loader=
jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/game', GameHandler),
    ('/end', EndHandler),
<<<<<<< HEAD
    ('/highscore', HighScoreHandler)
], debug=True)
=======
    ('/highscore', HighScoreHandler),
    ('/player', CreatePlayer)
], debug=True)
>>>>>>> 9ff3acde6696ae35d2a882bcd22aff3b8eae4dac
