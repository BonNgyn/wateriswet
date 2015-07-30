
import webapp2
import jinja2
import os

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/main.html')
        self.response.write(template.render({}))

class GameHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/game.html')
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))

class EndHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/end.html')
<<<<<<< HEAD
        self.response.write(template.render({}))
        # template_var = {{"collectednum": collectednum}}
        # self.response.write(template.render({ collectednum }))


=======
        collectednum = self.request.get('collectednum')
        template_vars = {'collectednum': collectednum}
        self.response.write(template.render((template_vars)))
>>>>>>> f51501f5505ed69cf3c04361ed767274294be212


jinja_environment = jinja2.Environment(loader=
jinja2.FileSystemLoader(os.path.dirname(__file__)))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/game', GameHandler),
    ('/end', EndHandler)
], debug=True)
