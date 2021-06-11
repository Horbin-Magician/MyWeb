from flask import Blueprint

from .views.login import LoginView
from .views.authority import AuthorityView
from .views.user import UserView
from .views.favourites.favType import FavTypeView
from .views.favourites.favItem import FavItemView
from .views.search import SearchView

api = Blueprint('api', __name__, template_folder='templates')

api.add_url_rule('/login', view_func=LoginView.as_view(name='login'))
api.add_url_rule('/authority', view_func=AuthorityView.as_view(name='authority'))
api.add_url_rule('/user', view_func=UserView.as_view(name='user'))
api.add_url_rule('/favourites/favtype', view_func=FavTypeView.as_view(name='favtype'))
api.add_url_rule('/favourites/favitem', view_func=FavItemView.as_view(name='favitem'))
api.add_url_rule('/search', view_func=SearchView.as_view(name='search'))