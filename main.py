
#
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
        player = self.request.get('player')

class EndHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/end.html')
<<<<<<< HEAD
        name = self.request.get('player')
        date = datetime.datetime.now()
        player = Player(name=name)
        player.date_created = date
        player.put()
=======
<<<<<<< HEAD
        self.response.write(template.render({}))
        # template_var = {{"collectednum": collectednum}}
        # self.response.write(template.render({ collectednum }))


=======
>>>>>>> 12973f677495472e2bac2202733c8ff6a2dab29c
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))
>>>>>>> f51501f5505ed69cf3c04361ed767274294be212

class HighScoreHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/highscore.html')
        player = self.request.get('player')
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum, 'player': player}
        self.response.write(template.render((template_vars)))


jinja_environment = jinja2.Environment(loader=
jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/game', GameHandler),
    ('/end', EndHandler),
    ('/highscore', HighScoreHandler)
], debug=True)
