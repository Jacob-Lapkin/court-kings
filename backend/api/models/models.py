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


class PlayerSchema(Schema):
    id = fields.Int(dump_only=True)
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    age = fields.Int(required=True)
    country = fields.Str(required=True)
    rank = fields.Int(required=True)
    image_url = fields.Str(required=False)
    height = fields.Float(required=False)
    weight = fields.Float(required=False)
    hand = fields.Str(required=False)


player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)
        

