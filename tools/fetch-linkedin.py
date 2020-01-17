# ***********************************************
# Fetch experience & education data from LinkedIn
# ***********************************************

import os
import json
from dotenv import load_dotenv
from linkedin_api import Linkedin

load_dotenv()

DEST = os.path.dirname(os.path.realpath(__file__)) + "/../src/data"
EXPERIENCE_OUTPUT_FILENAME = "experience.json"
EDUCATION_OUTPUT_FILENAME = "education.json"
LINKEDIN_PUBLIC_ID = "kévin-painchaud-a2605935"
LINKEDIN_USERNAME = os.getenv("LINKEDIN_USERNAME")
LINKEDIN_PASSWORD = os.getenv("LINKEDIN_PASSWORD")

print("⏳ Fetching data from LinkedIn...")

# Authenticate
api = Linkedin(LINKEDIN_USERNAME, LINKEDIN_PASSWORD)

# Get profile data from API
profile = api.get_profile(LINKEDIN_PUBLIC_ID)

# Create dist directory if not exists
if not os.path.exists(DEST):
    os.makedirs(DEST)

# Experience
# Format data and save it into a JSON file
experience = []

for p in profile["experience"]:
    experience.append({
        "companyUrn": p["companyUrn"].replace("urn:li:fs_miniCompany:", ""),
        "companyName": p["companyName"],
        "timePeriod": p["timePeriod"],
        "title": p["title"],
        "companyName": p["companyName"],
        "locationName": p["locationName"]
    })

with open(DEST + "/" + EXPERIENCE_OUTPUT_FILENAME, "w", encoding="utf-8") as f:
    json.dump(experience, f, ensure_ascii=False, indent=4)

# Education
# Format data and save it into a JSON file
education = []

for p in profile["education"]:
    education.append({
        "schoolUrn": p["school"]["objectUrn"].replace("urn:li:school:", ""),
        "schoolName": p["schoolName"],
        "timePeriod": p["timePeriod"],
        "degreeName": p["degreeName"],
        "fieldOfStudy": p["fieldOfStudy"]
    })

with open(DEST + "/" + EDUCATION_OUTPUT_FILENAME, "w", encoding="utf-8") as f:
    json.dump(education, f, ensure_ascii=False, indent=4)

print("✔️ Done")
