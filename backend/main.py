from fastapi.middleware.cors import CORSMiddleware
from model import Graph, add_sentence_node
from fastapi import FastAPI, Form, HTTPException, File, UploadFile
from scribe import transcribe_audio
import nltk

app = FastAPI()

graph = Graph()

origins = ["http://localhost