from dataclasses import dataclass
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

CORS(app)
# como maximo agregar 5 cursos por cada uno

@dataclass
class CursosA(db.Model): #cursos a aprender 
    nombre: str
    codigo: str

    codigo = db.Column(db.String(50),primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<CursosA {self.codigo}>'

@dataclass
class CursosE(db.Model): #cursos a enseñar
    nombre: str
    codigo: int

    codigo = db.Column(db.String(50),primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<CursosE {self.codigo}>'


@dataclass
class Alumno(db.Model):
    #id: int
    nombres: str
    apellidos: str
    fnacimiento: str
    carrera: str
    universidad: str
    ciclo: int
    correo: str
    password: str
    sexo: str
 
    #id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombres = db.Column(db.String(100), nullable=False)
    apellidos = db.Column(db.String(100), nullable=False)
    fnacimiento = db.Column(db.String(10), nullable=False)
    carrera = db.Column(db.String(100), nullable=False)
    universidad = db.Column(db.String(100), nullable=False)
    ciclo = db.Column(db.Integer, nullable=False)
    correo = db.Column(db.String(100), primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    sexo = db.Column(db.String(10), nullable=False)

    def __repr__(self):
        return f'<Alumno {self.correo}>' #se identifica por el correo

with app.app_context():
    db.create_all()


#Rutas

@app.route('/cursos_a', methods=['GET','POST'])
def route_get_cursos_a():
    if request.method == 'GET':
        return get_cursos_a()
    elif request.method == 'POST':
        curso = request.get_json()
        return insert_curso_a(curso)
    
@app.route('/cursos_e', methods=['GET','POST'])
def route_get_cursos_e():
    if request.method == 'GET':
        return get_cursos_e()
    elif request.method == 'POST':
        curso1 = request.get_json()
        return insert_curso_e(curso1)

@app.route('/alumnos', methods=['GET','POST'])
def route_get_alumnos():
    if request.method == 'GET':
        return get_alumnos()
    elif request.method == 'POST':
        curso = request.get_json()
        return insert_alumno(curso)


@app.route('/login', methods=['POST'])
def route_login():
    login_credentials = request.get_json()
    return login(login_credentials)


# Funciones
def get_cursos_e():
    cursos_e = CursosA.query.all()
    return jsonify(cursos_e)

def get_cursos_a():
    cursos_a = CursosE.query.all()
    return jsonify(cursos_a)

def insert_curso_a(data):
    curso_a = CursosA(codigo=data["codigo"], nombre=data["nombre"])
    db.session.add(curso_a)
    db.session.commit()
    return jsonify(curso_a)

def insert_curso_e(data):
    curso_e = CursosE(codigo=data["codigo"], nombre=data["nombre"])
    db.session.add(curso_e)
    db.session.commit()
    return jsonify(curso_e)

def get_alumnos():
    alumnos = Alumno.query.all()
    return jsonify(alumnos)

def insert_alumno(alumno):
    alumno = Alumno(nombres=alumno['nombres'],apellidos=alumno['apellidos'],fnacimiento=alumno['fnacimiento'],carrera=alumno['carrera'],
                    universidad=alumno['universidad'],ciclo=alumno['ciclo'],correo=alumno['correo'], password=alumno['password'],sexo=alumno['sexo'])
    db.session.add(alumno)
    db.session.commit()
    return jsonify(alumno)



def login(alumno_credentials):
    print(alumno_credentials)
    alumno = Alumno.query.filter_by(correo=alumno_credentials['correo']).first()
    print(alumno)
    if not alumno:
        return {},401
    
    if alumno_credentials['password'] != alumno.password:
        return {},401
    
    return jsonify(alumno)

if __name__ == '__main__':
    app.run(debug=True)