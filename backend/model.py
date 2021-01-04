import json
import random
import math
from numpy.linalg import norm
from numpy import dot
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")


def rotate_matrix(x, y, angle, x_shift=0, y_shift=0, units="DEGREES"):
    """
    Rotates a point in the xy-plane counterclockwise through an angle about the origin
    https://en.wikipedia.org/wiki/Rotation_matrix
    :param x: x coordinate
    :param y: y coordinate
    :param x_shift: x-axis shift from origin (0, 0)
    :param y_shift: y-axis shift from origin (0, 0)
    :param angle: The rotation angle in degrees
    :param units: DEGREES (default) or RADIANS
    :return: Tuple of rotated x and y
    """

    # Shift to origin (0,0)
    x = x - x_shift
    y = y - y_shift

    # Convert degrees to radians
    if units == "DEGREES":
        angle = math.radians(angle)

    # Rotation matrix multiplication to get rotated x & y
    xr = (x * math.cos(angle)) - (y * math.sin(angle)) + x_shift
    yr = (x * math.sin(angle)) + (y * math.cos(angle)) + y_shift

    return xr, yr


# Text processing helper functions
def cosine_similarity(a, b):
    if a is None or b is None:
        return 0
    # TODO: idk if we should do this when the shape doenst match
    if len(a) != len(b):
        return 0
    return dot(a, b) / (norm(a) * norm(b))


def get_embedding(text, model="text-embedding-ada-002"):
    text = text.replace("\n", " ")
    return openai.Embedding.create(input=[text], model=model)["data"][0]["embedding"]


def get_node_distance_from_similarity(similarity: float) -> tuple[int, int]:
    max_dist = 300
    min_dist = 100
    # scale a number from 0 to 1 to 50 to 10
    distance = round(
        (max_dist - min_dist) * similarity + min_dist
    )  # TODO: maybe better distance instead of x = y

    (x, y) = rotate_matrix(distance, distance, random.randint(0, 360))

    return (x, y)


# Node as json { keyword: string, position: {x: int, y: int}, data: { sentence: string } }
class Node:
    def __init__(
        self, keyword: str, position: dict, sentences: list[str], embedding: list
    ):
        self.keyword = keyword
        