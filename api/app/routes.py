from flask import Blueprint, jsonify, request
from .models import Deck, Suit, Card

api = Blueprint('api', __name__)

@api.route('/api/decks/', methods=['GET'])
def get_decks():
    decks = Deck.query.all()
    results = []
    
    for deck in decks:
        results.append({
            "id": deck.id,
            "name": deck.name,
            "description": deck.description
        })

    return jsonify(results)

@api.route('/api/cards/', methods=['GET'])
def get_cards():
    deck_id = request.args.get('deck')

    if deck_id is not None:
        cards = Card.query.filter_by(deck_id=deck_id).all()
    else:
        cards = Card.query.all()

    results = []

    for card in cards:
        suit = Suit.query.get(card.suit_id)
        results.append({
            "id": card.id,
            "name": card.name,
            "suit": {
                "id": suit.id,
                "name": suit.name
            },
            "description": card.description,
            "isVegetarian": card.isVegetarian
        })    

    return jsonify(results)
