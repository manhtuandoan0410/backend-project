Smart Health Assistant (name is not final)



What it does
1. user inputs the disease -> the app will tell: what the disease is, its symptoms, medicine in use
- a TextField/TextInput
- a Button
- autocomplete/fill or suggestion of disease feature while user typing 

- an answer field


2. user describes the symptoms -> the app will tell what diseases it could be and treatment/remedy are expected 
- a warning will tell user to visit and consult with the hospital or doctor, not relying on this app (this is just for reference and educational purposes)
- multi-lined TextField to describe what user is experiencing, or split into multi TextFields to narrow down what diseases (filter() function) it could be (matched diseases) 
- a button to submit

- a list of suspected diseases


3. features: 
- nearest specialists and hospitals + their contact phone number and/or emergency number (goole map api may be required with credit card, but google grants 200euro/usd in credit....so they only charge when we exceed the 200-euros worth click -> don't publish if don't want it cost you money)
- nearest drugstores / pharmacies (probably which has that suggested medicine on shelves)
- authentication (for example, firebase or supabase)
- saving disease/sickness history -> records -> profile (locally for privacy)
- navigation (tabs: home (welcome screen + an intro), definition, predicting disease, historical sickness)
- etc. 
 

Resource:
- API source: NHS of UK, free subscription
https://digital.nhs.uk/developer/api-catalogue
==> import to create DB 

Grade aim: 4-5

