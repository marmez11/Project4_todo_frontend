# ShadowEye Military Weapons Index/Tracker System

### Concept:

ShadowEye System is a government/private lead online tracking system that tracks a variety of Weapons and other War related Technologies/Vehicles/etc... in terms of who manufactured/sold the weapons/etc..., who they are assigned to and the status/state/descriptions of the weapons.

#####The main features of the application are:

- Project creation and management
- Task creation and assignment to a project
- Task status tracking
- Search functionality for projects and tasks

### Technologies:
- Python
- Django
- Django REST
- Postgre SQL
- HTML
- CSS
- Javascript

#### Project Link on Render
[Project 4 Deployed]()

![ShadowEye System](https://imgur.com/k0IO1e8.png)

### Daily Plan:

| Day | Goal  | 
| :---:   | :---: |
| 1 | Set up Frontend & Backend Repositories   |
| 2 | Create View(s), Loader(s), Route(s), etc....  |
| 3 | Rendering Data to Views | 
| 4 | Create Form(s) | 
| 5 | Debugging and Testing | 
| 6 | Styling, Designing, Debugging |
| 7 | Presentation |

### Routes, Loaders and Actions:

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/weapons" | GET   |  returns all of the weapons information  |  Index/Main  |
| "/weapons/:id" | GET   |  returns one of the Weapons information  |  Show  |
| "/weapons" | POST  |  Create Weapon(s) and/or Weapon Owner(s) associated with the weapon(s)  |  Create  |
| "/weapons/:id" | Put  |  Update Weapon(s) and/or Weapon Owner(s) associated with the weapon(s)  |  Update  |
| "/weapons/:id" | Delete  |  Delete Weapon(s) and/or Weapon Owner(s) associated with the weapon(s)  |  Delete  |