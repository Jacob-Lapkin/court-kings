from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields


db = SQLAlchemy()


class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    country = db.Column(db.String(50))
    rank = db.Column(db.Integer)
    image_url = db.Column(db.String(200))
    height = db.Column(db.Float)
    weight = db.Column(db.Float)
    hand = db.Column(db.String(10))
    teams = db.relationship('TeamPlayer', backref='player')

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(255))
    zipcode = db.Column(db.String(10))
    leagues = db.relationship('LeagueUser', backref='user')

class League(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    max_teams = db.Column(db.Integer)
    max_players_per_team = db.Column(db.Integer)
    teams = db.relationship('Team', backref='league')
    league_users = db.relationship('LeagueUser', backref='league')

class LeagueUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    league_id = db.Column(db.Integer, db.ForeignKey('leagues.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    team = db.relationship('Team', backref='league_users')

class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(50), nullable=False)
    league_id = db.Column(db.Integer, db.ForeignKey('league.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    players = db.relationship('TeamPlayer', backref='team')

class TeamPlayer(db.Model):
    __tablename__ = 'team_player'
    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'), nullable=False)
    player_id = db.Column(db.Integer, db.ForeignKey('player.id'), nullable=False)
