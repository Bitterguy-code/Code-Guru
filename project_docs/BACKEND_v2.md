# Models
### Description
## User
classic Django authentication
## Account
| Field       | Type            | Constraints | Validation | 
| ----------- | --------------- | ----------- | ---------- |
| user       | OneToOneField     | on_delete=models.CASCADE    |
| position       | TextField     | null=True    |
| years       | IntegerField     | null=True    |
| goals       | TextField     | null=True    |

Relationships: `User`(Parent) One to One relationship with  `Account`(Child)

Methods: `__str__(self)` - Return "(`{self.user}` account)"

## Challenge
| Field       | Type            | Constraints | Validation | 
| ----------- | --------------- | ----------- | ---------- |
| date       | DateTimeField     | null=True    |
| questionLink       | CharField     | null=True    |
| questionTitle       | CharField     | null=True    |
| difficulty       | CharField     | null=True    |
| question       | CharField     | null=True    |
| hints       | CharField     | null=True    |
| html       | TextField     | null=True    |
| input_J       | CharField     | null=True    |
| output_J       | CharField     | null=True    |
| input_P       | CharField     | null=True    |
| output_P       | CharField     | null=True    |

Serializers: `ChallengeSerializer`

Methods:
* `__str__` - Return "Challenge(`{self.date}`)"
* `setHTML(htmlString)` - Replace specific Fields of certain instances
* `set_Input_And_Output(input_J, output_J, input_P, output_P)` - Replace specific Fields of certain instances

## Answer
| Field       | Type            | Constraints | Validation | 
| ----------- | --------------- | ----------- | ---------- |
| account      | ForeignKey     | on_delete=models.CASCADE    |
| challenge       | ForeignKey     | on_delete=models.CASCADE    |
| code       | TextField     | null= True    |
| language      | CharField     | null= True    |
| solve       | BooleanField     | default=False    |

Relationships: 
* `Account`(Parent) One to Many relationship with  `Answer`(Child)
* `Challenge`(Parent) One to Many relationship with  `Answer`(Child)

Serializers: `AnswerSerializer`

Methods:
* `__str__` - Return "(Answer of `{self.account}` for `{self.challenge}`)"
* `setCode(code)` - Replace specific Fields of certain instances
* `setSolve(value)` - Replace specific Fields of certain instances
* `setLanguage(language)` - Replace specific Fields of certain instances


## Newsletter
| Field       | Type            | Constraints | Validation | 
| ----------- | --------------- | ----------- | ---------- |
| date       | DateTimeField     | null=True    |
| html       | TextField     | null=True    |


Serializers: `NewsletterSerializer`

Methods:
* `__str__`
* `setHTML`


# Endpoints
### Base Path
| Path | Purpose |
|------------|------------|
| admin/     | admin site |
| api/v1/user/ | user_app |
| api/v1/playground/ | playground_app |
| api/v1/challenge/ | challenge_app | 
| api/v1/newsletter/ | newsletter_app |

### user_app
| Path | Class | Method |
| --------------| ---------------------------- |---|
| signup/     | Sign_Up| POST -> |
| login/      | Log_In | POST -> |
| logout/     | Log_Out | DELETE -> |
| info/       | Info | GET -> |


### playground_app
| Path | Class | Method |
| --------------------| ---------------------------- |-|
| answer/             | Playground | PUT -> |


### challenge_app
| Path | Class | Method |
|--------------------| ---------------------------- |-|
| html/\<str:date\>/   | DailyChallenge | GET ->  |
| answer/            | DailyAnswer | GET -> |
| answer/            | DailyAnswer | PUT -> |


### newsletter_app
| Path | Class | Method |
| ----------- | ---------------------------- |---|
| \<str:date\> | DailyNewsletter | GET -> |

