"""
Author: Lakshya Kumar
Registration ID: 17BCD7037
Task : Flask server for predicting the ideal crop using random forest classifier
"""

# Importing all the necessary libraries
from __future__ import print_function

import pandas as pd
from flask import Flask
from flask import request
from sklearn import metrics
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Reading the dataset

crop = pd.read_csv("/home/lakshya/Documents/capstone/Crop_recommendation.csv")
crop.columns = crop.columns.str.replace(' ', '')

# Declaring the features and label
features = crop[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
target = crop['label']

acc = []
model = []

# splitting the training and testing dataset

x_train, x_test, y_train, y_test = train_test_split(features, target, test_size=0.3, random_state=2)

# Declaring the random forest classifier and training it

RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(x_train, y_train)

# Testing the classifier

predicted_values = RF.predict(x_test)

# calculating the accuracy of the classifier

x = metrics.accuracy_score(y_test, predicted_values)
acc.append(x)
model.append('RF')

#######################################################################################################

# Creating the flask app

app = Flask(__name__)


# Declaring route for API call that receives a JSON object as a parameter in the form of an HTTP request
# First the argument is extracted and converted into an array
# Then it is passed through the classifier and the recommended is returned with a 200 response code
# The app runs at port 5000

@app.route('/flask', methods=['GET'])
def index():
    args = request.args
    # print(args)
    dictionary = args.to_dict()
    # print(dictionary)
    test_values = [dictionary.get('N'), dictionary.get('P'), dictionary.get('K'), dictionary.get('temp'),
                   dictionary.get('hum'), dictionary.get('pH'), dictionary.get('rain')]
    # print(test_values)
    result = RF.predict([test_values])[0]
    return result


if __name__ == "__main__":
    app.run(port=5000, debug=True)
