from flask import Blueprint, jsonify

players_bp = Blueprint('players', __name__)

@players_bp.route('/players', methods=['GET'])
def players():
    return jsonify(message="get players")