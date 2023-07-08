from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Deck(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Deck %r>' % self.name

class Suit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Suit %r>' % self.name

class Card(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey('deck.id'), nullable=False)
    deck = db.relationship('Deck', backref=db.backref('cards', lazy=True))
    suit_id = db.Column(db.Integer, db.ForeignKey('suit.id'), nullable=False)
    suit = db.relationship('Suit', backref=db.backref('cards', lazy=True))
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    isVegetarian = db.Column(db.Boolean, nullable=False)

    def __repr__(self):
        return '<Card %r>' % self.name
    
# db.create_all()
# db.session.commit()
