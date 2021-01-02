import json
import random
import math
from numpy.linalg import norm
from numpy import dot
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")


def rotate_matrix(x, y, angle, x_shift=0, y_shift=0, units="DEGREES"):
 