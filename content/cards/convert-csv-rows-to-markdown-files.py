#!/usr/bin/env python3

import csv
import re
import unicodedata

from pathlib import Path

source = Path('/Users/borgdacious/Dropbox/Sites/facilitator-cards/data/cards.csv')

def slugify(value):
    value = str(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)

def underscorify(value):
    value = str(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '_', value)

def writify(path, row):
    file = open(path, 'w')
    print('---', file=file)
    for key, value in row.items():
        key = underscorify(key).lower()
        value = value.translate(str.maketrans({'"':  r"\"", "'":  r"\'"}))
        if key != 'Explanation':
            print(f'{key}: "{value}"', file=file)
    print('\n---\n', file=file)
    if 'Explanation' in row:
        print(row['Explanation'], file=file)


def dothething():
    csv_file = open(source, newline='')
    csv_content = csv.DictReader(csv_file)
    for row in csv_content:
        filename = slugify(row['Title'])
        path = Path(f'{filename}.md')
        if not path.is_file():
            writify(path, row)


if __name__ == '__main__':
    dothething()