Smart Health Assistant (name is not final)



What it does
1. user inputs the disease -> the app will tell: what the disease is, its symptoms, medicine in use
- a TextField/TextInput
- a Button
- autocomplete/fill or suggestion of disease feature while user typing 

- an answer field


2. user describes the symptoms -> the app will tell what diseases it could be and treatment/remedy are expected 
- a warning will tell user to visit and consult with the hospital or doctor, not relying on this app (this is just for reference and educational purposes)
- multi-lined TextField to describe what user is experiencing, or split into multi TextFields; require at least three non-empty symptoms before searching
- a button to submit

- a list of possible related diseases/sicknesses matched against suitable NHS information (educational possibilities, not a diagnosis); include a clear warning to consult a healthcare professional


3. features: 
- nearest specialists and hospitals + their contact phone number and/or emergency number (goole map api may be required with credit card, but google grants 200euro/usd in credit....so they only charge when we exceed the 200-euros worth click -> don't publish if don't want it cost you money)
- nearest drugstores / pharmacies (probably which has that suggested medicine on shelves)
- public NHS information search: users can search for a condition without logging in; the app displays the condition description and related information returned by the NHS API
- authentication (for example, Firebase or Supabase) for user accounts
- sickness history: only logged-in users can save and view records; records are private to the owning account and must never be publicly accessible or visible to other users
- navigation (tabs: home (welcome screen + an intro), definition, predicting disease, historical sickness)
- etc. 
 

Resource:
- API source: NHS of UK, free subscription
https://digital.nhs.uk/developer/api-catalogue
Use the NHS API to retrieve health information; do not assume the API catalogue itself is a database to import.

Privacy and safety:
- Public condition searches do not require an account and must not expose a user's saved records.
- Saved sickness history is sensitive health data. Require authentication and enforce record ownership on every history operation.
- Do not use real personal health data in demonstrations or test fixtures.
- Show clear educational-use and medical-care disclaimers; the app must not present search results as a diagnosis.

feature: Rahti and CSC

Grade aim: 4-5
