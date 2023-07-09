import json
import os
from .models import db, Deck, Suit, Card

def seed_data():
    # Get the path to the current directory
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct the file path to data.json
    data_file = os.path.join(current_dir, 'data.json')

    try:
        with open(data_file, 'r') as file:
            data = json.load(file)

        decks_data = data['decks']
        suits_data = data['suits']
        cards_data = data['cards']

        # Insert deck data
        for deck in decks_data:
            db.session.add(Deck(id=deck['id'], name=deck['name'], description=deck['description']))

        # Insert suit data
        for suit in suits_data:
            db.session.add(Suit(id=suit['id'], name=suit['name'], description=suit['description']))

        # Insert card data
        for card in cards_data:
            db.session.add(Card(id=card['id'], name=card['name'], deck_id=card['deckId'], suit_id=card['suitId'], isVegetarian=card['isVegetarian'], description=card['description']))

        db.session.commit()
        print("Data seeding completed successfully.")
    except FileNotFoundError:
        print("Data file not found.")
    except json.JSONDecodeError:
        print("Error decoding JSON file.")
    except Exception as e:
        print(f"An error occurred during data seeding: {e}")
        db.session.rollback()
