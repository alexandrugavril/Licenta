var testsQueries = [
    {
        "Cnt": 500,
        "Text": "Do you prefer to wash in the mornings or evenings?",
        "Match": "FALSE"
    },
    {
        "Cnt": 501,
        "Text": "My blood pressure was 16 and 9 today at 9 am.",
        "Match": "TRUE",
        "RuleID": 6
    },
    {
        "Cnt": 502,
        "Text": "My pulse is 90 now.",
        "Match": "TRUE",
        "RuleID": 8
    },
    {
        "Cnt": 503,
        "Text": "My blood sugar level is 90 today.",
        "Match": "TRUE",
        "RuleID": 8
    },
    {
        "Cnt": 504,
        "Text": "My blood pressure was low today at 9 am.",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":505,
        "Text": "Turn on the lights in the room",
        "Match": "TRUE",
        "RuleID": 13
    },

    {
        "Cnt":521,
        "Text": "What was my maximum heart rate this week?",
        "Match": "TRUE",
        "RuleID": 5
    },
    {
        "Cnt":522,
        "Text": "What was my minimum pulse today?",
        "Match": "TRUE",
        "RuleID": 5
    },
    {
        "Cnt":523,
        "Text": "What was my mean blood sugar level this month?",
        "Match": "TRUE",
        "RuleID": 5
    },
    {
        "Cnt":524,
        "Text": "What was my maximum glycaemia this month?",
        "Match": "TRUE",
        "RuleID": 5
    },
    {
        "Cnt":525,
        "Text": "What was my blood sugar level three days ago?",
        "Match": "TRUE",
        "RuleID": 7
    },
    {
        "Cnt":526,
        "Text": "What was my blood sugar level a week ago at 9 am",
        "Match": "TRUE",
        "RuleID": 7
    },
    {
        "Cnt":527,
        "Text": "What was my glycaemia level four days ago at 9 am",
        "Match": "TRUE",
        "RuleID": 7
    },
    {
        "Cnt":528,
        "Text": "What was my blood sugar level a week ago at 9 am?",
        "Match": "TRUE",
        "RuleID": 7
    },
    {
        "Cnt":529,
        "Text": "What was my pulse level a week ago at 6 in the afternoon?",
        "Match": "TRUE",
        "RuleID": 7
    },
    {
        "Cnt":531,
        "Text": "What was my maximum heart rate this month?",
        "Match": "TRUE",
        "RuleID": 5
    },
    //MedINFO
    {
        "Cnt":532,
        "Text": "I took two pills this evening at 7.",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":533,
        "Text": "I took a pill this morning because I had a head acke.",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":534,
        "Text": "I took two pills this evening at 7.",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":535,
        "Text": "I took a pill this morning because I had a head acke.",
        "Match": "TRUE",
        "RuleID": 1
    },

    {
        "Cnt":536,
        "Text": "I took two pills this evening at 7.",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":537,
        "Text": "I took a pill this morning because I had a head acke.",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":538,
        "Text": "I took a pill yesterday morning because I was sick",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":539,
        "Text": "I took two medications on Christmas morning.",
        "Match": "TRUE",
        "RuleID": 1
    },
    {
        "Cnt":540,
        "Text": "I took pills on new years eve.",
        "Match": "TRUE",
        "RuleID": 4
    },

    {
        "Cnt":541,
        "Text": "I took my pills yesterday morning.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":542,
        "Text": "I have taken all my pills today.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":543,
        "Text": "I have taken all of my recommended pills yesterday.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":544,
        "Text": "I've finished taking my pills for today.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":545,
        "Text": "I took all my morning pills today.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":546,
        "Text": "I've taken all my afternoon pills.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":547,
        "Text": "I have taken all my evening medication",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":548,
        "Text": "I took all my pills yesterday.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt":549,
        "Text": "I took all my evening pills yesterday at 8 pm.",
        "Match": "TRUE",
        "RuleID": 4
    },

    //Med Queries:
    {
        "Cnt":550,
        "Text": "When should I next take my pills?",
        "Match": "TRUE",
        "RuleID": 2
    },
    {
        "Cnt":551,
        "Text": "When do I have to next take my pills?",
        "Match": "TRUE",
        "RuleID": 2
    },
    {
        "Cnt":552,
        "Text": "Did I take pills yesterday?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt":553,
        "Text": "Have I been taking medication yesterday?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt":554,
        "Text": "Did i take my medication on Christmas eve?",
        "Match": "TRUE",
        "RuleID": 3
    },

    {
        "Cnt":555,
        "Text": "At what time need I take my pills next?",
        "Match": "TRUE",
        "RuleID": 2
    },
    {
        "Cnt":556,
        "Text": "Did I take my pills last tuesday?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt":557,
        "Text": "Have I took any pills last monday?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt":558,
        "Text": "Did I take my pills last friday?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt":559,
        "Text": "Did I take pills yesterday?",
        "Match": "TRUE",
        "RuleID": 3
    },

    {
        "Cnt":560,
        "Text": "Was I taking any pills last saturday?",
        "Match": "TRUE",
        "RuleID": 3
    },
    //Physical Exercising Information
    {
        "Cnt":561,
        "Text": "I worked out for 30 minutes last tuesday.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":562,
        "Text": "I did my 20 minutes work out today.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":563,
        "Text": "I worked out for 40 minutes on the threadmill this evening.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":564,
        "Text": "I've worked out this morning for 20 minutes.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":565,
        "Text": "I had finished my 20 minutes work out this morning.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":566,
        "Text": "I worked out a lot for one hour today.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":567,
        "Text": "I worked out in the gym for 22 minutes last tuesday.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":568,
        "Text": "I did my 30 minutes recommended work out today at 6 pm.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":569,
        "Text": "I worked out for at least 20 minutes this evening.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":570,
        "Text": "I finished the work out after 20 minutes today.",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":571,
        "Text": "I've finished my work out earlier this evening.",
        "Match": "TRUE",
        "RuleID": 12
    },
    {
        "Cnt":572,
        "Text": "I worked out for one and a half hours this afternoon",
        "Match": "TRUE",
        "RuleID": 11
    },
    {
        "Cnt":573,
        "Text": "I've exercised today",
        "Match": "TRUE",
        "RuleID": 12
    },
    {
        "Cnt":574,
        "Text": "I've exercised yesterday.",
        "Match": "TRUE",
        "RuleID": 12
    },

    {
        "Cnt":575,
        "Text": "I worked out today.",
        "Match": "TRUE",
        "RuleID": 12
    },
    {
        "Cnt":576,
        "Text": "I worked out yesterday.",
        "Match": "TRUE",
        "RuleID": 12
    },
    {
        "Cnt":577,
        "Text": "I did my work out for today.",
        "Match": "TRUE",
        "RuleID": 12
    },
    {
        "Cnt":578,
        "Text": "I finished working out today.",
        "Match": "TRUE",
        "RuleID": 12
    },
    {
        "Cnt":579,
        "Text": "I have worked out enough for today.",
        "Match": "TRUE",
        "RuleID": 12
    },
    //PhysycalQueries
    {
        "Cnt":580,
        "Text": "Have I done my exercising yesterday?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":571,
        "Text": "Have I finished my exercising last monday?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":572,
        "Text": "Have I worked out this afternoon?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":573,
        "Text": "Have I exercised today?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":574,
        "Text": "Haven't I exercised yesterday?",
        "Match": "TRUE",
        "RuleID": 10
    },

    {
        "Cnt":575,
        "Text": "Haven't I worked out today?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":576,
        "Text": "Have I worked out yesterday.",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":577,
        "Text": "Have I done my work out for today.",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":578,
        "Text": "Have I finished working out today?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":579,
        "Text": "Did I work out enough for today?",
        "Match": "TRUE",
        "RuleID": 10
    },
    //Reminders Information
    {
        "Cnt":580,
        "Text": "Move the reminder from 9 am to 8 pm today",
        "Match": "TRUE",
        "RuleID": 21
    },
    {
        "Cnt":581,
        "Text": "Remove all the reminders I had today.",
        "Match": "TRUE",
        "RuleID": 17
    },

    {
        "Cnt":582,
        "Text": "Remind me to go for a walk.",
        "Match": "TRUE",
        "RuleID": 16
    },
    {
        "Cnt":583,
        "Text": "Remind me to exercise tonight.",
        "Match": "TRUE",
        "RuleID": 15
    },
    {
        "Cnt":584,
        "Text": "Remind me to call John tonight at 9pm.",
        "Match": "TRUE",
        "RuleID": 15
    },
    {
        "Cnt":585,
        "Text": "Move the reminder from 7 am to 8 pm.",
        "Match": "TRUE",
        "RuleID": 21
    },
    {
        "Cnt":586,
        "Text": "Move the reminder from 6 pm today to 8 pm tomorrow.",
        "Match": "TRUE",
        "RuleID": 21
    },
    {
        "Cnt":587,
        "Text": "Have I done my work out for today.",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":588,
        "Text": "Have I finished working out today?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt":589,
        "Text": "Did I work out enough for today?",
        "Match": "TRUE",
        "RuleID": 10
    },
    //Reminders Queries.
    {
        "Cnt":590,
        "Text": "Am I free tonight at 9 pm?",
        "Match": "TRUE",
        "RuleID": 18
    },
    {
        "Cnt":591,
        "Text": "Am I free this morning?",
        "Match": "TRUE",
        "RuleID": 18
    },

    {
        "Cnt":592,
        "Text": "Do I have any plans for today?",
        "Match": "TRUE",
        "RuleID": 18
    },
    {
        "Cnt":593,
        "Text": "Do I have anything scheduled for today?",
        "Match": "TRUE",
        "RuleID": 18
    },
    {
        "Cnt":594,
        "Text": "Do I have anything in my schedule today?",
        "Match": "TRUE",
        "RuleID": 18
    },
    {
        "Cnt":595,
        "Text": "Do I have any reminders tomorrow?",
        "Match": "TRUE",
        "RuleID": 18
    },
    {
        "Cnt":596,
        "Text": "Do I have any plans for tomorrow?",
        "Match": "TRUE",
        "RuleID": 18
    },

    //REPEAT
    {
        "Cnt":597,
        "Text": "Please repeat that for me.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":598,
        "Text": "Can you please say that again?",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":599,
        "Text": "Repeat that.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":600,
        "Text": "Say it again please.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":601,
        "Text": "Tell me that again.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":602,
        "Text": "Say that again for me.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":603,
        "Text": "Repeat that for me please.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":604,
        "Text": "I didn't get that. Please repeat it.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":605,
        "Text": "Repeat",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":606,
        "Text": "Please repeat it.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":607,
        "Text": "say that to me again.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":608,
        "Text": "Tell me that again.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt":609,
        "Text": "I didn't understand that.",
        "Match": "TRUE",
        "RuleID": 19
    },
    //UNDO
    {
        "Cnt":610,
        "Text": "Revert that.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":611,
        "Text": "That's wrong.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":612,
        "Text": "You have made a mistake.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":613,
        "Text": "That's not what I said.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":614,
        "Text": "That is wrong. I didn't say that.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":615,
        "Text": "No, that's wrong.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":616,
        "Text": "Revert that.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":617,
        "Text": "Undo it!",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":618,
        "Text": "Undo what you just said.",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt":619,
        "Text": "Revert what you just did",
        "Match": "TRUE",
        "RuleID": 20
    },
    {
        "Cnt": 1,
        "Text": "Did I take my medications today?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt": 2,
        "Text": "Did I forget to take my pills today?",
        "Match": "TRUE",
        "RuleID": 3
    },
    {
        "Cnt": 3,
        "Text": "Have I taken my pills today?",
        "Match": "TRUE",
        "RuleID": 3

    },
    {
        "Cnt": 4,
        "Text": "Can you tell me if I’ve taken my pills eight days ago?",
        "Match": "TRUE",
        "RuleID": 3

    },
    {
        "Cnt": 5,
        "Text": "Can you check if I’ve taken my pills last week?",
        "Match": "TRUE",
        "RuleID": 3

    },
    {
        "Cnt": 6,
        "Text": "When should I take my pills next?",
        "Match": "TRUE",
        "RuleID": 2

    },
    {
        "Cnt": 7,
        "Text": "At what time should I next take my pills?",
        "Match": "TRUE",
        "RuleID": 2
    },
    {
        "Cnt": 8,
        "Text": "How many pills do I have to take today?",
        "Match": "TRUE",
        "RuleID": 3

    },
    {
        "Cnt": 9,
        "Text": "I took my pills just now.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt": 10,
        "Text": "I’ve just taken my pills.",
        "Match": "TRUE",
        "RuleID": 4
    },
    {
        "Cnt": 11,
        "Text": "I’ve finished taking pills today.",
        "Match": "FALSE"
    },
    {
        "Cnt": 12,
        "Text": "What was my heart rate yesterday?",
        "Match": "TRUE",
        "RuleID": 7
    },
    {
        "Cnt": 13,
        "Text": "What was my pulse two days ago?",
        "Match": "TRUE",
        "RuleID": 7

    },
    {
        "Cnt": 14,
        "Text": "What was my last measured blood pressure?",
        "Match": "TRUE",
        "RuleID": 7

    },
    {
        "Cnt": 15,
        "Text": "What was my glycemia last week?",
        "Match": "TRUE",
        "RuleID": 7

    },
    {
        "Cnt": 16,
        "Text": "What was my average pulse this week?",
        "Match": "TRUE",
        "RuleID": 5

    },
    {
        "Cnt": 17,
        "Text": "Do you know what was my pulse yesterday?",
        "Match": "TRUE",
        "RuleID": 7

    },
    {
        "Cnt": 18,
        "Text": "What was my mean pulse this week?",
        "Match": "TRUE",
        "RuleID": 5
    },
    {
        "Cnt": 19,
        "Text": "What was my mean blood sugar level this week?",
        "Match": "TRUE",
        "RuleID": 5
    },
    {
        "Cnt": 20,
        "Text": "My blood pressure is 16 and 9.",
        "Match": "FALSE"
    },
    {
        "Cnt": 21,
        "Text": "My pulse is 78.",
        "Match": "FALSE"
    },
    {
        "Cnt": 22,
        "Text": "My glycemia is 100.",
        "Match": "FALSE"
    },
    {
        "Cnt": 23,
        "Text": "My blood sugar today is high.",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt": 24,
        "Text": "My blood sugar yesterday was low.",
        "Match": "TRUE",
        "RuleID": 9

    },
    {
        "Cnt": 25,
        "Text": "My heart rate is 79 today.",
        "Match": "TRUE",
        "RuleID": 8

    },
    {
        "Cnt": 26,
        "Text": "My pulse now is 90.",
        "Match": "TRUE",
        "RuleID": 8

    },
    {
        "Cnt":506,
        "Text": "My pulse three days ago at 7 am was 89",
        "Match": "TRUE",
        "RuleID": 8
    },
    {
        "Cnt":507,
        "Text": "My blood pressure was 14 and 8 this evening.",
        "Match": "TRUE",
        "RuleID": 6
    },
    {
        "Cnt":508,
        "Text": "My blood pressure was 15 and 6 yesterday morning.",
        "Match": "TRUE",
        "RuleID": 6
    },
    {
        "Cnt":509,
        "Text": "My heart rate two days ago at 5 pm was 69.",
        "Match": "TRUE",
        "RuleID": 8
    },
    {
        "Cnt":510,
        "Text": "My blood pressure was high yesterday afternoon.",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":511,
        "Text": "My heart rate was low yesterday afternoon.",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":512,
        "Text": "My glycaemia was low yesterday afternoon.",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":513,
        "Text": "My glycaemia was very high yesterday evening.",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":514,
        "Text": "My blood sugar level was very low two days ago at 9 am",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":515,
        "Text": "My blood sugar level was very low two days ago at 9 am",
        "Match": "TRUE",
        "RuleID": 9
    },
    {
        "Cnt":516,
        "Text": "My blood sugar level was 80 a week ago at 9 am",
        "Match": "TRUE",
        "RuleID": 8
    },
    {
        "Cnt":517,
        "Text": "My glycaemia level was 16 and 8 four days ago at 9 am",
        "Match": "TRUE",
        "RuleID": 6
    },
    {
        "Cnt":518,
        "Text": "My blood sugar level was 15 and 8 a week ago at 9 am",
        "Match": "TRUE",
        "RuleID": 6
    },
    {
        "Cnt":519,
        "Text": "My pulse level was 80 a week ago at 6 in the afternoon",
        "Match": "TRUE",
        "RuleID": 8
    },
    {
        "Cnt":520,
        "Text": "My heart rate was 79 last monday.",
        "Match": "TRUE",
        "RuleID": 8
    },




    {
        "Cnt": 27,
        "Text": "Have I exercised yesterday?",
        "Match": "TRUE",
        "RuleID": 10
    },
    {
        "Cnt": 28,
        "Text": "When did I last work out?",
        "Match": "TRUE",
        "RuleID": 10

    },
    {
        "Cnt": 29,
        "Text": "Did i finish my exercising yesterday?",
        "Match": "TRUE",
        "RuleID": 10

    },
    {
        "Cnt": 30,
        "Text": "Have I exercised at all this week?",
        "Match": "TRUE",
        "RuleID": 10

    },
    {
        "Cnt": 31,
        "Text": "I’ve exercised today for 30 minutes.",
        "Match": "TRUE",
        "RuleID": 11

    },
    {
        "Cnt": 32,
        "Text": "I’ve just finished exercising.",
        "Match": "FALSE"
    },
    {
        "Cnt": 33,
        "Text": "I’ve started exercising.",
        "Match": "FALSE"
    },
    {
        "Cnt": 34,
        "Text": "I began working out.",
        "Match": "FALSE"
    },
    {
        "Cnt": 35,
        "Text": "Please open the blinds.",
        "Match": "TRUE",
        "RuleID": 13


    },
    {
        "Cnt": 36,
        "Text": "Close the blinds.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 37,
        "Text": "Raise the blinds.",
        "Match": "TRUE",
        "RuleID": 13

    },
    {
        "Cnt": 38,
        "Text": "Lower the blinds.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 39,
        "Text": "Turn on the air conditioning.",
        "Match": "TRUE",
        "RuleID": 13

    },
    {
        "Cnt": 40,
        "Text": "Turn off the air.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 41,
        "Text": "Please turn on the lights.",
        "Match": "TRUE",
        "RuleID": 13

    },
    {
        "Cnt": 42,
        "Text": "Turn off the lights.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 43,
        "Text": "Can you please turn off the lights in the room?",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 44,
        "Text": "Can you please turn off the air conditioning.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 45,
        "Text": "Please start the air conditioning.",
        "Match": "TRUE",
        "RuleID": 13

    },
    {
        "Cnt": 46,
        "Text": "Please stop the air conditioning.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 47,
        "Text": "Please switch on the lights.",
        "Match": "TRUE",
        "RuleID": 13

    },
    {
        "Cnt": 48,
        "Text": "Thank you.",
        "Match": "FALSE"
    },
    {
        "Cnt": 49,
        "Text": "No  thank you.",
        "Match": "FALSE"
    },
    {
        "Cnt": 50,
        "Text": "No.",
        "Match": "FALSE"
    },
    {
        "Cnt": 51,
        "Text": "Yes.",
        "Match": "FALSE"
    },
    {
        "Cnt": 52,
        "Text": "Affirmative.",
        "Match": "FALSE"
    },
    {
        "Cnt": 53,
        "Text": "Negative.",
        "Match": "FALSE"
    },
    {
        "Cnt": 54,
        "Text": "Goodbye.",
        "Match": "FALSE"
    },
    {
        "Cnt": 55,
        "Text": "See you later.",
        "Match": "FALSE"
    },
    {
        "Cnt": 56,
        "Text": "Hello.",
        "Match": "FALSE"
    },
    {
        "Cnt": 57,
        "Text": "How are you today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 58,
        "Text": "I didn’t get that.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt": 59,
        "Text": "I didn’t understand.",
        "Match": "TRUE",
        "RuleID": 19

    },
    {
        "Cnt": 60,
        "Text": "What did you say?",
        "Match": "TRUE",
        "RuleID": 19

    },
    {
        "Cnt": 61,
        "Text": "Please repeat that.",
        "Match": "TRUE",
        "RuleID": 19

    },
    {
        "Cnt": 62,
        "Text": "I didn’t ask that.",
        "Match": "TRUE",
        "RuleID": 20

    },
    {
        "Cnt": 63,
        "Text": "This is stupid.",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt": 64,
        "Text": "Can you repeat that?",
        "Match": "TRUE",
        "RuleID": 19
    },
    {
        "Cnt": 65,
        "Text": "Please say that again.",
        "Match": "TRUE",
        "RuleID": 19

    },
    {
        "Cnt": 66,
        "Text": "Say it again.",
        "Match": "TRUE",
        "RuleID": 19

    },
    {
        "Cnt": 67,
        "Text": "Yes I did.",
        "Match": "FALSE"
    },
    {
        "Cnt": 68,
        "Text": "No I did not.",
        "Match": "FALSE"
    },
    {
        "Cnt": 69,
        "Text": "No  I forgot.",
        "Match": "FALSE"
    },
    {
        "Cnt": 70,
        "Text": "Yes of course I did.",
        "Match": "FALSE"
    },
    {
        "Cnt": 71,
        "Text": "Certainly.",
        "Match": "FALSE"
    },
    {
        "Cnt": 72,
        "Text": "Of course.",
        "Match": "FALSE"
    },
    {
        "Cnt": 73,
        "Text": "Remind me to take my pills at 9.",
        "Match": "TRUE",
        "RuleID": 15

    },
    {
        "Cnt": 74,
        "Text": "I don’t need to take my pills at 9 anymore.",
        "Match": "TRUE",
        "RuleID": 17
    },
    {
        "Cnt": 75,
        "Text": "Please remind me to exercise this evening.",
        "Match": "TRUE",
        "RuleID": 15

    },
    {
        "Cnt": 76,
        "Text": "I won’t be exercising this evening.",
        "Match": "TRUE",
        "RuleID": 17
    },
    {
        "Cnt": 77,
        "Text": "Please put a reminder to exercise at 7.",
        "Match": "TRUE",
        "RuleID": 17


    },
    {
        "Cnt": 78,
        "Text": "Please put a reminder to take my pills at 8 this evening.",
        "Match": "TRUE",
        "RuleID": 17

    },
    {
        "Cnt": 79,
        "Text": "Turn on the air conditioning at 7.",
        "Match": "TRUE",
        "RuleID": 13
    },
    {
        "Cnt": 80,
        "Text": "Do not turn on the air conditioning at 7.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 81,
        "Text": "Turn off the air conditioning at 8 today.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 82,
        "Text": "Open the blinds at 9 am today.",
        "Match": "TRUE",
        "RuleID": 13
    },
    {
        "Cnt": 83,
        "Text": "Close the blinds at 9 this evening.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 84,
        "Text": "Switch off the lights at 9 this evening.",
        "Match": "TRUE",
        "RuleID": 14

    },
    {
        "Cnt": 85,
        "Text": "Do I have anything to do today?",
        "Match": "TRUE",
        "RuleID": 18

    },
    {
        "Cnt": 86,
        "Text": "Do I have anything to do at 9 pm tomorrow?",
        "Match": "TRUE",
        "RuleID": 18

    },
    {
        "Cnt": 87,
        "Text": "Am I free at 9 PM today?",
        "Match": "TRUE",
        "RuleID": 18

    },
    {
        "Cnt": 88,
        "Text": "Do I have anything set for 8 pm today?",
        "Match": "TRUE",
        "RuleID": 18

    },
    {
        "Cnt": 89,
        "Text": "Do I have any calls planned for today?",
        "Match": "TRUE",
        "RuleID": 18

    },
    {
        "Cnt": 90,
        "Text": "Have I received any calls today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 91,
        "Text": "Did I receive any calls today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 92,
        "Text": "Remind me to take my pills after I work out.",
        "Match": "TRUE",
        "RuleID": 16
    },
    {
        "Cnt": 93,
        "Text": "Remind me to measure my blood pressure.",
        "Match": "TRUE",
        "RuleID": 16

    },
    {
        "Cnt": 94,
        "Text": "Remind me to measure my glycemia after I work out.",
        "Match": "TRUE",
        "RuleID": 16

    },
    {
        "Cnt": 95,
        "Text": "Change the reminder from 7 to 9.",
        "Match": "TRUE",
        "RuleID": 21

    },
    {
        "Cnt": 96,
        "Text": "Move the reminder from 6 am to 9 this evening.",
        "Match": "TRUE",
        "RuleID": 21

    },
    {
        "Cnt": 97,
        "Text": "Remove the reminder I had at 8.",
        "Match": "TRUE",
        "RuleID": 17

    },
    {
        "Cnt": 98,
        "Text": "Stop reminding me everything.",
        "Match": "TRUE",
        "RuleID": 17

    },
    {
        "Cnt": 99,
        "Text": "Do not remind me anything.",
        "Match": "TRUE",
        "RuleID": 17

    },
    {
        "Cnt": 100,
        "Text": "Remove all the reminders for today.",
        "Match": "TRUE",
        "RuleID": 17

    },
    {
        "Cnt": 101,
        "Text": "Did I walk my dog today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 102,
        "Text": "Have I done my shopping today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 103,
        "Text": "Did I meet Dave today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 104,
        "Text": "What was the temperature in London today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 105,
        "Text": "What was the mean humidity in Bucharest yesterday?",
        "Match": "FALSE"
    },
    {
        "Cnt": 106,
        "Text": "When did I last went shopping?",
        "Match": "FALSE"
    },
    {
        "Cnt": 107,
        "Text": "Have I done my shopping today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 108,
        "Text": "Can I go to the park?",
        "Match": "FALSE"
    },
    {
        "Cnt": 109,
        "Text": "When did I last went to the park?",
        "Match": "FALSE"
    },
    {
        "Cnt": 110,
        "Text": "Shall I call Mary?",
        "Match": "FALSE"
    },
    {
        "Cnt": 111,
        "Text": "I am hungry",
        "Match": "FALSE"
    },
    {
        "Cnt": 112,
        "Text": "I am thirsty",
        "Match": "FALSE"
    },
    {
        "Cnt": 113,
        "Text": "What is for dinner tonight?",
        "Match": "FALSE"
    },
    {
        "Cnt": 114,
        "Text": "When can I leave my room?",
        "Match": "FALSE"
    },
    {
        "Cnt": 115,
        "Text": "Why did the Great Britain left EU",
        "Match": "FALSE"
    },
    {
        "Cnt": 116,
        "Text": "When did I last eat?",
        "Match": "FALSE"
    },
    {
        "Cnt": 117,
        "Text": "What is the time?",
        "Match": "FALSE"
    },
    {
        "Cnt": 118,
        "Text": "Where is the assistant?",
        "Match": "FALSE"
    },
    {
        "Cnt": 119,
        "Text": "Can I go for a jog?",
        "Match": "FALSE"
    },
    {
        "Cnt": 120,
        "Text": "What is nice to see on the TV this evening?",
        "Match": "FALSE"
    },
    {
        "Cnt": 121,
        "Text": "At what time will it get dark today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 122,
        "Text": "Did Mary take her pills today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 123,
        "Text": "What will I die?",
        "Match": "FALSE"
    },
    {
        "Cnt": 124,
        "Text": "What is recommended to eat today?",
        "Match": "FALSE"
    },
    {
        "Cnt": 125,
        "Text": "What is my password?",
        "Match": "FALSE"
    },
    {
        "Cnt": 126,
        "Text": "Whats your (full name?",
        "Match": "FALSE"
    },
    {
        "Cnt": 127,
        "Text": "How old are you?",
        "Match": "FALSE"
    },
    {
        "Cnt": 128,
        "Text": "Whats your Birthday?",
        "Match": "FALSE"
    },
    {
        "Cnt": 129,
        "Text": "What starsign does that make it?",
        "Match": "FALSE"
    },
    {
        "Cnt": 130,
        "Text": "Whats your favourite colour?",
        "Match": "FALSE"
    },
    {
        "Cnt": 131,
        "Text": "Whats your lucky number?",
        "Match": "FALSE"
    },
    {
        "Cnt": 132,
        "Text": "Do you have any pets?",
        "Match": "FALSE"
    },
    {
        "Cnt": 133,
        "Text": "Where are you from?",
        "Match": "FALSE"
    },
    {
        "Cnt": 134,
        "Text": "How tall are you?",
        "Match": "FALSE"
    },
    {
        "Cnt": 135,
        "Text": "What shoe size are you?",
        "Match": "FALSE"
    },
    {
        "Cnt": 136,
        "Text": "How many pairs of shoes do you own?",
        "Match": "FALSE"
    },
    {
        "Cnt": 137,
        "Text": "If you were prime miniser/ruler of the world what laws would you make?",
        "Match": "FALSE"
    },
    {
        "Cnt": 138,
        "Text": "If you were a super hero what powers would you have?",
        "Match": "FALSE"
    },
    {
        "Cnt": 139,
        "Text": "and what would your hero name be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 140,
        "Text": "and what outfit would you wear?",
        "Match": "FALSE"
    },
    {
        "Cnt": 141,
        "Text": "What was your last dream about?",
        "Match": "FALSE"
    },
    {
        "Cnt": 142,
        "Text": "What would you do if you won the lottery?",
        "Match": "FALSE"
    },
    {
        "Cnt": 143,
        "Text": "Would you like to build/design your own house?",
        "Match": "FALSE"
    },
    {
        "Cnt": 144,
        "Text": "Which form of public transport do you prefer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 145,
        "Text": "What talents do you have?",
        "Match": "FALSE"
    },
    {
        "Cnt": 146,
        "Text": "Can you juggle?",
        "Match": "FALSE"
    },
    {
        "Cnt": 147,
        "Text": "Can you solve a rubix cube?",
        "Match": "FALSE"
    },
    {
        "Cnt": 148,
        "Text": "Do you have a cherished childhood teddybear?",
        "Match": "FALSE"
    },
    {
        "Cnt": 149,
        "Text": "Are you psychic in any way?",
        "Match": "FALSE"
    },
    {
        "Cnt": 150,
        "Text": "Are you a good dancer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 151,
        "Text": "Are you a good singer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 152,
        "Text": "Are you a good cook?",
        "Match": "FALSE"
    },
    {
        "Cnt": 153,
        "Text": "Are you a good artist?",
        "Match": "FALSE"
    },
    {
        "Cnt": 154,
        "Text": "Are you a good listener?",
        "Match": "FALSE"
    },
    {
        "Cnt": 155,
        "Text": "Are you a good public speaker?",
        "Match": "FALSE"
    },
    {
        "Cnt": 156,
        "Text": "Are you a good babysitter?",
        "Match": "FALSE"
    },
    {
        "Cnt": 157,
        "Text": "Are you a good mechanic?",
        "Match": "FALSE"
    },
    {
        "Cnt": 158,
        "Text": "Are you a good diplomat?",
        "Match": "FALSE"
    },
    {
        "Cnt": 159,
        "Text": "Are you a good employee?",
        "Match": "FALSE"
    },
    {
        "Cnt": 160,
        "Text": "Are you a good dresser?",
        "Match": "FALSE"
    },
    {
        "Cnt": 161,
        "Text": "Are you a good swimmer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 162,
        "Text": "Are you a good skier?",
        "Match": "FALSE"
    },
    {
        "Cnt": 163,
        "Text": "Are you a good lover?",
        "Match": "FALSE"
    },
    {
        "Cnt": 164,
        "Text": "Are you a good musician?",
        "Match": "FALSE"
    },
    {
        "Cnt": 165,
        "Text": "Are you a good comedian?",
        "Match": "FALSE"
    },
    {
        "Cnt": 166,
        "Text": "Are you a good cleaner?",
        "Match": "FALSE"
    },
    {
        "Cnt": 167,
        "Text": "Are you a good actor?",
        "Match": "FALSE"
    },
    {
        "Cnt": 168,
        "Text": "Are you a good writer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 169,
        "Text": "Have you ever been bungee jumping?",
        "Match": "FALSE"
    },
    {
        "Cnt": 170,
        "Text": "Have you ever been canoeing/kayaking?",
        "Match": "FALSE"
    },
    {
        "Cnt": 171,
        "Text": "What types of holidays do you prefer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 172,
        "Text": "Whats the furthest you've ever been on holiday?",
        "Match": "FALSE"
    },
    {
        "Cnt": 173,
        "Text": "What was your favourite holiday?",
        "Match": "FALSE"
    },
    {
        "Cnt": 174,
        "Text": "Where would your dream holiday be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 175,
        "Text": "Can you tap dance?",
        "Match": "FALSE"
    },
    {
        "Cnt": 176,
        "Text": "Whats your favourite zoo animal?",
        "Match": "FALSE"
    },
    {
        "Cnt": 177,
        "Text": "Whats your favourite sport?",
        "Match": "FALSE"
    },
    {
        "Cnt": 178,
        "Text": "Whats your favourite food?",
        "Match": "FALSE"
    },
    {
        "Cnt": 179,
        "Text": "Whats your favourite pizza topping?",
        "Match": "FALSE"
    },
    {
        "Cnt": 180,
        "Text": "Whats your favourite film?",
        "Match": "FALSE"
    },
    {
        "Cnt": 181,
        "Text": "Whats your favourite song?",
        "Match": "FALSE"
    },
    {
        "Cnt": 182,
        "Text": "Whats your favourite alcoholic drink?",
        "Match": "FALSE"
    },
    {
        "Cnt": 183,
        "Text": "Whats your favourite non-alcoholic drink?",
        "Match": "FALSE"
    },
    {
        "Cnt": 184,
        "Text": "Whats your favourite TV program?",
        "Match": "FALSE"
    },
    {
        "Cnt": 185,
        "Text": "Whats your favourite boyband?",
        "Match": "FALSE"
    },
    {
        "Cnt": 186,
        "Text": "Whats your favourite girl group?",
        "Match": "FALSE"
    },
    {
        "Cnt": 187,
        "Text": "What would be your ideal partner?",
        "Match": "FALSE"
    },
    {
        "Cnt": 188,
        "Text": "Do you want children?",
        "Match": "FALSE"
    },
    {
        "Cnt": 189,
        "Text": "Do you want a church wedding?",
        "Match": "FALSE"
    },
    {
        "Cnt": 190,
        "Text": "Are you religious?",
        "Match": "FALSE"
    },
    {
        "Cnt": 191,
        "Text": "Do you like reality TV programs?",
        "Match": "FALSE"
    },
    {
        "Cnt": 192,
        "Text": "Do you like TV talent shows?",
        "Match": "FALSE"
    },
    {
        "Cnt": 193,
        "Text": "If you were gay who would your life partner be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 194,
        "Text": "If you could go back in time to change one thing what would it be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 195,
        "Text": "How many hats do you own?",
        "Match": "FALSE"
    },
    {
        "Cnt": 196,
        "Text": "Are you any good at pool?",
        "Match": "FALSE"
    },
    {
        "Cnt": 197,
        "Text": "Whats the highest you've ever jumped into the water from?",
        "Match": "FALSE"
    },
    {
        "Cnt": 198,
        "Text": "Have you ever been admitted to hospital?",
        "Match": "FALSE"
    },
    {
        "Cnt": 199,
        "Text": "Have you ever had any brushes with the law?",
        "Match": "FALSE"
    },
    {
        "Cnt": 200,
        "Text": "Have you ever been on TV?",
        "Match": "FALSE"
    },
    {
        "Cnt": 201,
        "Text": "Have you ever met any celebrities?",
        "Match": "FALSE"
    },
    {
        "Cnt": 202,
        "Text": "Have you ever been to Legoland?",
        "Match": "FALSE"
    },
    {
        "Cnt": 203,
        "Text": "Have you ever done something heroic?",
        "Match": "FALSE"
    },
    {
        "Cnt": 204,
        "Text": "Have you ever played a practical joke on anyone?",
        "Match": "FALSE"
    },
    {
        "Cnt": 205,
        "Text": "Have you ever been the recipiant of a practical joke?",
        "Match": "FALSE"
    },
    {
        "Cnt": 206,
        "Text": "What would be your best achievement to date?",
        "Match": "FALSE"
    },
    {
        "Cnt": 207,
        "Text": "Do you prefer baths or showers?",
        "Match": "FALSE"
    },
    {
        "Cnt": 208,
        "Text": "Do you prefer towel drying, blow drying or natural dryin your hair?",
        "Match": "FALSE"
    },
    {
        "Cnt": 209,
        "Text": "Have you ever built a snowman?",
        "Match": "FALSE"
    },
    {
        "Cnt": 210,
        "Text": "Have you ever been sledging?",
        "Match": "FALSE"
    },
    {
        "Cnt": 211,
        "Text": "Have you ever flown a kite?",
        "Match": "FALSE"
    },
    {
        "Cnt": 212,
        "Text": "What colour socks are you wearing?",
        "Match": "FALSE"
    },
    {
        "Cnt": 213,
        "Text": "If you could live anywhere, where would that be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 214,
        "Text": "Have you ever been famous?",
        "Match": "FALSE"
    },
    {
        "Cnt": 215,
        "Text": "Would you like to be a big celebrity?",
        "Match": "FALSE"
    },
    {
        "Cnt": 216,
        "Text": "Would you ever go on Big Brother?",
        "Match": "FALSE"
    },
    {
        "Cnt": 217,
        "Text": "How big is your TV?",
        "Match": "FALSE"
    },
    {
        "Cnt": 218,
        "Text": "What is your most essential appliance?",
        "Match": "FALSE"
    },
    {
        "Cnt": 219,
        "Text": "What type of music do you like?",
        "Match": "FALSE"
    },
    {
        "Cnt": 220,
        "Text": "Have you ever been skinnydipping?",
        "Match": "FALSE"
    },
    {
        "Cnt": 221,
        "Text": "How many Pillows do you sleep with?",
        "Match": "FALSE"
    },
    {
        "Cnt": 222,
        "Text": "What position do you often sleep in?",
        "Match": "FALSE"
    },
    {
        "Cnt": 223,
        "Text": "What do you wear to bed?",
        "Match": "FALSE"
    },
    {
        "Cnt": 224,
        "Text": "How big is your house?",
        "Match": "FALSE"
    },
    {
        "Cnt": 225,
        "Text": "Do you prefer sunrises or sunsets?",
        "Match": "FALSE"
    },
    {
        "Cnt": 226,
        "Text": "What do you typically have for breakfast?",
        "Match": "FALSE"
    },
    {
        "Cnt": 227,
        "Text": "Do you like scary movies?",
        "Match": "FALSE"
    },
    {
        "Cnt": 228,
        "Text": "Whats your favourite Milkshake flavour?",
        "Match": "FALSE"
    },
    {
        "Cnt": 229,
        "Text": "Have you ever been in a newspaper?",
        "Match": "FALSE"
    },
    {
        "Cnt": 230,
        "Text": "How long can you balance on one foot?",
        "Match": "FALSE"
    },
    {
        "Cnt": 231,
        "Text": "Have you ever fired a gun?",
        "Match": "FALSE"
    },
    {
        "Cnt": 232,
        "Text": "Have you ever tried archery?",
        "Match": "FALSE"
    },
    {
        "Cnt": 233,
        "Text": "Whats your favourite condement?",
        "Match": "FALSE"
    },
    {
        "Cnt": 234,
        "Text": "Whats your favourite clean word?",
        "Match": "FALSE"
    },
    {
        "Cnt": 235,
        "Text": "Whats your favourite swear word?",
        "Match": "FALSE"
    },
    {
        "Cnt": 236,
        "Text": "Whats your least favourite word?",
        "Match": "FALSE"
    },
    {
        "Cnt": 237,
        "Text": "What was the last film you saw?",
        "Match": "FALSE"
    },
    {
        "Cnt": 238,
        "Text": "What football team do you support?",
        "Match": "FALSE"
    },
    {
        "Cnt": 239,
        "Text": "Whats the longest you've gone without sleep?",
        "Match": "FALSE"
    },
    {
        "Cnt": 240,
        "Text": "Whats the tallest building you've ever been up?",
        "Match": "FALSE"
    },
    {
        "Cnt": 241,
        "Text": "Do you have any scars?",
        "Match": "FALSE"
    },
    {
        "Cnt": 242,
        "Text": "Do you like marmite?",
        "Match": "FALSE"
    },
    {
        "Cnt": 243,
        "Text": "Did you ever win any sportsday events?",
        "Match": "FALSE"
    },
    {
        "Cnt": 244,
        "Text": "What did you want to be when you grew up?",
        "Match": "FALSE"
    },
    {
        "Cnt": 245,
        "Text": "If you could change anything about yourself what would it be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 246,
        "Text": "Whats the longest you've ever grown your hair?",
        "Match": "FALSE"
    },
    {
        "Cnt": 247,
        "Text": "Are you scared of flying?",
        "Match": "FALSE"
    },
    {
        "Cnt": 248,
        "Text": "Would you rather trade some intelligence for looks or looks for intelligence?",
        "Match": "FALSE"
    },
    {
        "Cnt": 249,
        "Text": "Have you ever tie-dyed your own clothes?",
        "Match": "FALSE"
    },
    {
        "Cnt": 250,
        "Text": "How often do you buy new clothes?",
        "Match": "FALSE"
    },
    {
        "Cnt": 251,
        "Text": "Are you reliable?",
        "Match": "FALSE"
    },
    {
        "Cnt": 252,
        "Text": "Are you proud of yourself?",
        "Match": "FALSE"
    },
    {
        "Cnt": 253,
        "Text": "Have you ever had a secret admirer",
        "Match": "FALSE"
    },
    {
        "Cnt": 254,
        "Text": "If you could ask your future self one question what would it be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 255,
        "Text": "Do you hold grudges?",
        "Match": "FALSE"
    },
    {
        "Cnt": 256,
        "Text": "If you could breed two animals together to defy the laws of nature what new animal would you create?",
        "Match": "FALSE"
    },
    {
        "Cnt": 257,
        "Text": "Do you decorate the outside of your house for christmas?",
        "Match": "FALSE"
    },
    {
        "Cnt": 258,
        "Text": "Can you solve sudoko puzzles?",
        "Match": "FALSE"
    },
    {
        "Cnt": 259,
        "Text": "Have you ever played conkers?",
        "Match": "FALSE"
    },
    {
        "Cnt": 260,
        "Text": "Whats the most unusual conversation you've ever had?",
        "Match": "FALSE"
    },
    {
        "Cnt": 261,
        "Text": "Are you much of a gambler?",
        "Match": "FALSE"
    },
    {
        "Cnt": 262,
        "Text": "Are you much of a daredevil?",
        "Match": "FALSE"
    },
    {
        "Cnt": 263,
        "Text": "Are you a good liar?",
        "Match": "FALSE"
    },
    {
        "Cnt": 264,
        "Text": "Are you a good judge of character?",
        "Match": "FALSE"
    },
    {
        "Cnt": 265,
        "Text": "Are you any good at charades?",
        "Match": "FALSE"
    },
    {
        "Cnt": 266,
        "Text": "How long could you go without talking?",
        "Match": "FALSE"
    },
    {
        "Cnt": 267,
        "Text": "What has been your worst haircut/style?",
        "Match": "FALSE"
    },
    {
        "Cnt": 268,
        "Text": "Can you iceskate?",
        "Match": "FALSE"
    },
    {
        "Cnt": 269,
        "Text": "Can you summersault?",
        "Match": "FALSE"
    },
    {
        "Cnt": 270,
        "Text": "Whats your favourite joke?",
        "Match": "FALSE"
    },
    {
        "Cnt": 271,
        "Text": "Whats been your best present?",
        "Match": "FALSE"
    },
    {
        "Cnt": 272,
        "Text": "Whats been your worst present?",
        "Match": "FALSE"
    },
    {
        "Cnt": 273,
        "Text": "Have you ever sleepwalked?",
        "Match": "FALSE"
    },
    {
        "Cnt": 274,
        "Text": "Can you build a house of cards?",
        "Match": "FALSE"
    },
    {
        "Cnt": 275,
        "Text": "Whats your favourite TV advert?",
        "Match": "FALSE"
    },
    {
        "Cnt": 276,
        "Text": "Can you play poker?",
        "Match": "FALSE"
    },
    {
        "Cnt": 277,
        "Text": "If your parents hated your partner you currently loved would you ditch him or carry on with him despite the protests?",
        "Match": "FALSE"
    },
    {
        "Cnt": 278,
        "Text": "Have you ever been professionally photographed?",
        "Match": "FALSE"
    },
    {
        "Cnt": 279,
        "Text": "Have you ever baked your own cake?",
        "Match": "FALSE"
    },
    {
        "Cnt": 280,
        "Text": "Whats your favourite fruit pastel colour?",
        "Match": "FALSE"
    },
    {
        "Cnt": 281,
        "Text": "What traditionally adorns the top of your christmas tree?",
        "Match": "FALSE"
    },
    {
        "Cnt": 282,
        "Text": "What would be your dream sandwich?",
        "Match": "FALSE"
    },
    {
        "Cnt": 283,
        "Text": "Can you inpersonate anyone famous?",
        "Match": "FALSE"
    },
    {
        "Cnt": 284,
        "Text": "Can you do any accents other than your own?",
        "Match": "FALSE"
    },
    {
        "Cnt": 285,
        "Text": "Do you have a strong local accent?",
        "Match": "FALSE"
    },
    {
        "Cnt": 286,
        "Text": "Whats your favourite accent?",
        "Match": "FALSE"
    },
    {
        "Cnt": 287,
        "Text": "In O's and X's which do you normally pick?",
        "Match": "FALSE"
    },
    {
        "Cnt": 288,
        "Text": "Do you prefer blue or black inked pens?",
        "Match": "FALSE"
    },
    {
        "Cnt": 289,
        "Text": "What was the last thing you recorded off TV?",
        "Match": "FALSE"
    },
    {
        "Cnt": 290,
        "Text": "What was the last thing you dressed up as for fancy dress?",
        "Match": "FALSE"
    },
    {
        "Cnt": 291,
        "Text": "Do you prefer green or red grapes?",
        "Match": "FALSE"
    },
    {
        "Cnt": 292,
        "Text": "What do you like on your toast?",
        "Match": "FALSE"
    },
    {
        "Cnt": 293,
        "Text": "Do you prefer liquid soap or bars of soap?",
        "Match": "FALSE"
    },
    {
        "Cnt": 294,
        "Text": "How do you have your eggs?",
        "Match": "FALSE"
    },
    {
        "Cnt": 295,
        "Text": "Whats your favourite saying?",
        "Match": "FALSE"
    },
    {
        "Cnt": 296,
        "Text": "Have you ever been in a tug of war?",
        "Match": "FALSE"
    },
    {
        "Cnt": 297,
        "Text": "and did you win?",
        "Match": "FALSE"
    },
    {
        "Cnt": 298,
        "Text": "Can you stand on your hands unassisted?",
        "Match": "FALSE"
    },
    {
        "Cnt": 299,
        "Text": "What do you have on your fridge door?",
        "Match": "FALSE"
    },
    {
        "Cnt": 300,
        "Text": "Do you love or hate myspace?",
        "Match": "FALSE"
    },
    {
        "Cnt": 301,
        "Text": "Who was the last person to knock/ring at your door?",
        "Match": "FALSE"
    },
    {
        "Cnt": 302,
        "Text": "How old were you when you last went trick or treating?",
        "Match": "FALSE"
    },
    {
        "Cnt": 303,
        "Text": "Have you ever been bobbing for apples?",
        "Match": "FALSE"
    },
    {
        "Cnt": 304,
        "Text": "Whats your most expensive piece of clothing?",
        "Match": "FALSE"
    },
    {
        "Cnt": 305,
        "Text": "Whats the last thing you took a picture of?",
        "Match": "FALSE"
    },
    {
        "Cnt": 306,
        "Text": "Whats the last thing you drew a picture of?",
        "Match": "FALSE"
    },
    {
        "Cnt": 307,
        "Text": "Have you ever bought anything from ebay?",
        "Match": "FALSE"
    },
    {
        "Cnt": 308,
        "Text": "Whats your favourite smell/scent?",
        "Match": "FALSE"
    },
    {
        "Cnt": 309,
        "Text": "Can you blow bubbles with bubblegum?",
        "Match": "FALSE"
    },
    {
        "Cnt": 310,
        "Text": "What was your favourite birthday?",
        "Match": "FALSE"
    },
    {
        "Cnt": 311,
        "Text": "Can you curl your tounge?",
        "Match": "FALSE"
    },
    {
        "Cnt": 312,
        "Text": "Is your bellybutton an innie or outie?",
        "Match": "FALSE"
    },
    {
        "Cnt": 313,
        "Text": "What would be your dream car?",
        "Match": "FALSE"
    },
    {
        "Cnt": 314,
        "Text": "Are you left or right handed?",
        "Match": "FALSE"
    },
    {
        "Cnt": 315,
        "Text": "What was the last book you read?",
        "Match": "FALSE"
    },
    {
        "Cnt": 316,
        "Text": "What was the last song you danced to?",
        "Match": "FALSE"
    },
    {
        "Cnt": 317,
        "Text": "Have you ever owned a yo-yo?",
        "Match": "FALSE"
    },
    {
        "Cnt": 318,
        "Text": "Have you ever been on a pogo stick?",
        "Match": "FALSE"
    },
    {
        "Cnt": 319,
        "Text": "Have you ever been on a space hopper?",
        "Match": "FALSE"
    },
    {
        "Cnt": 320,
        "Text": "Who was the last person to send you a text message?",
        "Match": "FALSE"
    },
    {
        "Cnt": 321,
        "Text": "Have you ever accidentally injured anyone?",
        "Match": "FALSE"
    },
    {
        "Cnt": 322,
        "Text": "Are you scared of spiders?",
        "Match": "FALSE"
    },
    {
        "Cnt": 323,
        "Text": "Can you down a pint (of anything in one?",
        "Match": "FALSE"
    },
    {
        "Cnt": 324,
        "Text": "Have you ever been banned from a public place?",
        "Match": "FALSE"
    },
    {
        "Cnt": 325,
        "Text": "How much spam email do you tend to get a week?",
        "Match": "FALSE"
    },
    {
        "Cnt": 326,
        "Text": "If you could learn any language fluently what would it be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 327,
        "Text": "What historical Figure would you love to see in st centuary life?",
        "Match": "FALSE"
    },
    {
        "Cnt": 328,
        "Text": "As a kid were you ever frighted of a monster under the bed or in the cupboard?",
        "Match": "FALSE"
    },
    {
        "Cnt": 329,
        "Text": "Do you like clowns?",
        "Match": "FALSE"
    },
    {
        "Cnt": 330,
        "Text": "Do you prefer BBC or ITV?",
        "Match": "FALSE"
    },
    {
        "Cnt": 331,
        "Text": "Have you ever been surfing?",
        "Match": "FALSE"
    },
    {
        "Cnt": 332,
        "Text": "Have you ever been snowboarding?",
        "Match": "FALSE"
    },
    {
        "Cnt": 333,
        "Text": "Who was better, the Beatles or Elvis Presley?",
        "Match": "FALSE"
    },
    {
        "Cnt": 334,
        "Text": "Whats your favourite type of foreign food?",
        "Match": "FALSE"
    },
    {
        "Cnt": 335,
        "Text": "Which Foreign country do you dislike the most?",
        "Match": "FALSE"
    },
    {
        "Cnt": 336,
        "Text": "Do you like your music loud or easy listening?",
        "Match": "FALSE"
    },
    {
        "Cnt": 337,
        "Text": "Whats your favourite animated or cartoon program?",
        "Match": "FALSE"
    },
    {
        "Cnt": 338,
        "Text": "Do you sing in the shower?",
        "Match": "FALSE"
    },
    {
        "Cnt": 339,
        "Text": "Are you a clean or messy person?",
        "Match": "FALSE"
    },
    {
        "Cnt": 340,
        "Text": "Whats your prefered playing piece in monopoly?",
        "Match": "FALSE"
    },
    {
        "Cnt": 341,
        "Text": "Can or Do you still play twister?",
        "Match": "FALSE"
    },
    {
        "Cnt": 342,
        "Text": "Can you play chess?",
        "Match": "FALSE"
    },
    {
        "Cnt": 343,
        "Text": "Do you know the dance steps to an annoying cheesey pop song?",
        "Match": "FALSE"
    },
    {
        "Cnt": 344,
        "Text": "Do you prefer straight or bendy straws?",
        "Match": "FALSE"
    },
    {
        "Cnt": 345,
        "Text": "Have you ever entered a talent contest?",
        "Match": "FALSE"
    },
    {
        "Cnt": 346,
        "Text": "and did you win?",
        "Match": "FALSE"
    },
    {
        "Cnt": 347,
        "Text": "Do you like poetry?",
        "Match": "FALSE"
    },
    {
        "Cnt": 348,
        "Text": "Are you a bad loser?",
        "Match": "FALSE"
    },
    {
        "Cnt": 349,
        "Text": "Which would you choose? Jelly or Ice Cream?",
        "Match": "FALSE"
    },
    {
        "Cnt": 350,
        "Text": "Whats your favourite type of Pie?",
        "Match": "FALSE"
    },
    {
        "Cnt": 351,
        "Text": "Whats your most used phrase?",
        "Match": "FALSE"
    },
    {
        "Cnt": 352,
        "Text": "Whats your most used word?",
        "Match": "FALSE"
    },
    {
        "Cnt": 353,
        "Text": "Who would you want to play you in a movie of your life?",
        "Match": "FALSE"
    },
    {
        "Cnt": 354,
        "Text": "What would your dream job be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 355,
        "Text": "Which song do you hate the most?",
        "Match": "FALSE"
    },
    {
        "Cnt": 356,
        "Text": "How long does it take you to get ready?",
        "Match": "FALSE"
    },
    {
        "Cnt": 357,
        "Text": "What do you think the greatest invention has been?",
        "Match": "FALSE"
    },
    {
        "Cnt": 358,
        "Text": "Whats your favourite feature on the opposite sex?",
        "Match": "FALSE"
    },
    {
        "Cnt": 359,
        "Text": "Whats your least favourite feature on the opposite sex?",
        "Match": "FALSE"
    },
    {
        "Cnt": 360,
        "Text": "Who's your favourite Comedian?",
        "Match": "FALSE"
    },
    {
        "Cnt": 361,
        "Text": "What's your favourite board game?",
        "Match": "FALSE"
    },
    {
        "Cnt": 362,
        "Text": "Do you have any lucky items, objects or traditions?",
        "Match": "FALSE"
    },
    {
        "Cnt": 363,
        "Text": "Do you have any superstitions?",
        "Match": "FALSE"
    },
    {
        "Cnt": 364,
        "Text": "Whats your favourite Movie quote?",
        "Match": "FALSE"
    },
    {
        "Cnt": 365,
        "Text": "Who would win in a fight? Chuck Norris or Jack Bauer?",
        "Match": "FALSE"
    },
    {
        "Cnt": 366,
        "Text": "Do you have much of an ego?",
        "Match": "FALSE"
    },
    {
        "Cnt": 367,
        "Text": "Do you wear sunglasses indoors to look cool or stylish?",
        "Match": "FALSE"
    },
    {
        "Cnt": 368,
        "Text": "Are you a hat person?",
        "Match": "FALSE"
    },
    {
        "Cnt": 369,
        "Text": "Whats your favourite supermarket chain?",
        "Match": "FALSE"
    },
    {
        "Cnt": 370,
        "Text": "Whats your favourite fastfood chain?",
        "Match": "FALSE"
    },
    {
        "Cnt": 371,
        "Text": "Whats your first thought upon waking up?",
        "Match": "FALSE"
    },
    {
        "Cnt": 372,
        "Text": "What animal would you most like to have as a pet?",
        "Match": "FALSE"
    },
    {
        "Cnt": 373,
        "Text": "Whats your favourite type of tree?",
        "Match": "FALSE"
    },
    {
        "Cnt": 374,
        "Text": "If you could bankrupt one person or company who would it be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 375,
        "Text": "If you could steal one thing without consequence what would it be?",
        "Match": "FALSE"
    },
    {
        "Cnt": 376,
        "Text": "Who's your favourite celeb with the same first name or surname as you?",
        "Match": "FALSE"
    },
    {
        "Cnt": 377,
        "Text": "If evil-doers invaded your country would you rush to the battlelines to defend the motherland or hide in a box?",
        "Match": "FALSE"
    },
    {
        "Cnt": 378,
        "Text": "Whats your favourite flower?",
        "Match": "FALSE"
    },
    {
        "Cnt": 379,
        "Text": "Do you believe in ghosts?",
        "Match": "FALSE"
    },
    {
        "Cnt": 380,
        "Text": "Do you believe in the loch ness monster?",
        "Match": "FALSE"
    },
    {
        "Cnt": 381,
        "Text": "Do you believe in Aliens?",
        "Match": "FALSE"
    },
    {
        "Cnt": 382,
        "Text": "Do you believe the Governments hide technology and information from the public?",
        "Match": "FALSE"
    },
    {
        "Cnt": 383,
        "Text": "Which is your favourite pokemon?",
        "Match": "FALSE"
    },
    {
        "Cnt": 384,
        "Text": "What horror fiction character scares you the most?",
        "Match": "FALSE"
    },
    {
        "Cnt": 385,
        "Text": "Can you do  revolutions of a hula hoop?",
        "Match": "FALSE"
    },
    {
        "Cnt": 386,
        "Text": "Do you think Great Britain should have a National Day?",
        "Match": "FALSE"
    },
    {
        "Cnt": 387,
        "Text": "Do you think Great Britain should be part of a United Europe?",
        "Match": "FALSE"
    },
    {
        "Cnt": 388,
        "Text": "Would you want the Euro or keep the British Pound?",
        "Match": "FALSE"
    },
    {
        "Cnt": 389,
        "Text": "Were you part of the Brownies/Cubs/Scouts/Guides etc",
        "Match": "FALSE"
    },
    {
        "Cnt": 390,
        "Text": "Have you ever invented a fairly unique meal or drink?",
        "Match": "FALSE"
    },
    {
        "Cnt": 391,
        "Text": "Do you have any secret family recipes?",
        "Match": "FALSE"
    },
    {
        "Cnt": 392,
        "Text": "Do you have any family secrets? :o",
        "Match": "FALSE"
    },
    {
        "Cnt": 393,
        "Text": "Are you good at keeping secrets?",
        "Match": "FALSE"
    },
    {
        "Cnt": 394,
        "Text": "Have you ever been up in a hot air balloon?",
        "Match": "FALSE"
    },
    {
        "Cnt": 395,
        "Text": "Whats your favourite Sci-fi film/program etc?",
        "Match": "FALSE"
    },
    {
        "Cnt": 396,
        "Text": "When playing checkers or chess do you prefer to be black or white?",
        "Match": "FALSE"
    },
    {
        "Cnt": 397,
        "Text": "Which is better, a Pastie or Sausage Roll?",
        "Match": "FALSE"
    },
    {
        "Cnt": 398,
        "Text": "Do you prefer shopping on the high street or online?",
        "Match": "FALSE"
    },
    {
        "Cnt": 399,
        "Text": "Would you ever want to learn to fly?",
        "Match": "FALSE"
    },
    {
        "Cnt": 400,
        "Text": "Do you often read your horoscope?",
        "Match": "FALSE"
    },
    {
        "Cnt": 401,
        "Text": "Have you ever had a proper Tarot reading?",
        "Match": "FALSE"
    },
    {
        "Cnt": 402,
        "Text": "Whats your favourite brand of newspaper?",
        "Match": "FALSE"
    },
    {
        "Cnt": 403,
        "Text": "Have you ever milked a cow?",
        "Match": "FALSE"
    },
    {
        "Cnt": 404,
        "Text": "Have you ever used the phrase \"back in my time\" to someone younger than you?",
        "Match": "FALSE"
    },
    {
        "Cnt": 405,
        "Text": "Do you love or hate rollercoasters?",
        "Match": "FALSE"
    },
    {
        "Cnt": 406,
        "Text": "Which was the greatest Empire?",
        "Match": "FALSE"
    },
    {
        "Cnt": 407,
        "Text": "Whats the cleverest word you know?",
        "Match": "FALSE"
    },
    {
        "Cnt": 408,
        "Text": "Whats your favourite sportsware brand?",
        "Match": "FALSE"
    },
    {
        "Cnt": 409,
        "Text": "Do you buy any weekly/monthly magazines?",
        "Match": "FALSE"
    },
    {
        "Cnt": 410,
        "Text": "Who's your favourite Superhero?",
        "Match": "FALSE"
    },
    {
        "Cnt": 411,
        "Text": "Who's your favourite Villain/Baddie?",
        "Match": "FALSE"
    },
    {
        "Cnt": 412,
        "Text": "What was the last Album you purchased?",
        "Match": "FALSE"
    },
    {
        "Cnt": 413,
        "Text": "What was the last DVD you purchased?",
        "Match": "FALSE"
    },
    {
        "Cnt": 414,
        "Text": "What was the last piece of clothing you purchased?",
        "Match": "FALSE"
    },
    {
        "Cnt": 415,
        "Text": "When pulling crackers does everyone get one each regardless or whoever gets the big ends keeps all the prizes",
        "Match": "FALSE"
    },
    {
        "Cnt": 416,
        "Text": "Do you ever make your own greetings cards",
        "Match": "FALSE"
    },
    {
        "Cnt": 417,
        "Text": "Do you have a swiss army knife?",
        "Match": "FALSE"
    },
    {
        "Cnt": 418,
        "Text": "At what age did you twig onto the fact Santa wasnt real?",
        "Match": "FALSE"
    },
    {
        "Cnt": 419,
        "Text": "Whats your favourite fruit?",
        "Match": "FALSE"
    },
    {
        "Cnt": 420,
        "Text": "Have you ever done something really unbelivable, only to have no one around to see it?",
        "Match": "FALSE"
    },
    {
        "Cnt": 421,
        "Text": "Do you buy from charity shops?",
        "Match": "FALSE"
    },
    {
        "Cnt": 422,
        "Text": "Have you ever sold your services?",
        "Match": "FALSE"
    },
    {
        "Cnt": 423,
        "Text": "Have you ever raised money for charity?",
        "Match": "FALSE"
    },
    {
        "Cnt": 424,
        "Text": "Have you ever won a giant sized cuddly toy from a fair?",
        "Match": "FALSE"
    },
    {
        "Cnt": 425,
        "Text": "Is the glass half full or half empty?",
        "Match": "FALSE"
    },
    {
        "Cnt": 426,
        "Text": "Is the grass greener on the other side?",
        "Match": "FALSE"
    },
    {
        "Cnt": 427,
        "Text": "If a tree falls in the forest and there's no one around to hear it does it make a noise?",
        "Match": "FALSE"
    },
    {
        "Cnt": 428,
        "Text": "Why does it always rain on me?",
        "Match": "FALSE"
    },
    {
        "Cnt": 429,
        "Text": "Have you ever sailed a boat?",
        "Match": "FALSE"
    },
    {
        "Cnt": 430,
        "Text": "Do you love or loathe Harry Potter?",
        "Match": "FALSE"
    },
    {
        "Cnt": 431,
        "Text": "Do you do your utmost for the environment?",
        "Match": "FALSE"
    },
    {
        "Cnt": 432,
        "Text": "Do you love or loather Eurovison?",
        "Match": "FALSE"
    },
    {
        "Cnt": 433,
        "Text": "Have you ever weilded a sword?",
        "Match": "FALSE"
    },
    {
        "Cnt": 434,
        "Text": "If you were famous would you want a statue or a building names after you?",
        "Match": "FALSE"
    },
    {
        "Cnt": 435,
        "Text": "Whats your favourite type of fish?",
        "Match": "FALSE"
    },
    {
        "Cnt": 436,
        "Text": "Which do you prefer pony tails or pig tails?",
        "Match": "FALSE"
    },
    {
        "Cnt": 437,
        "Text": "Whats the ultimate cake topping?",
        "Match": "FALSE"
    },
    {
        "Cnt": 438,
        "Text": "Do you like marzipan?",
        "Match": "FALSE"
    },
    {
        "Cnt": 439,
        "Text": "Whats better? Center Parks or Butlins?",
        "Match": "FALSE"
    },
    {
        "Cnt": 440,
        "Text": "If you were in a band, what instrument/role would you play?",
        "Match": "FALSE"
    },
    {
        "Cnt": 441,
        "Text": "Can you erect a tent?",
        "Match": "FALSE"
    },
    {
        "Cnt": 442,
        "Text": "Do you suck or bite lollipops?",
        "Match": "FALSE"
    },
    {
        "Cnt": 443,
        "Text": "Have you ever used the yellow pages?",
        "Match": "FALSE"
    },
    {
        "Cnt": 444,
        "Text": "If you have an mp player what size is it?",
        "Match": "FALSE"
    },
    {
        "Cnt": 445,
        "Text": "Do you still have any music on vinyl or casettes?",
        "Match": "FALSE"
    },
    {
        "Cnt": 446,
        "Text": "Do you still have a camera that uses conventional film?",
        "Match": "FALSE"
    },
    {
        "Cnt": 447,
        "Text": "Approximately how many DVD's do you have?",
        "Match": "FALSE"
    },
    {
        "Cnt": 448,
        "Text": "Approximately how many Albums do you have?",
        "Match": "FALSE"
    },
    {
        "Cnt": 449,
        "Text": "Do you talk to yourself?",
        "Match": "FALSE"
    },
    {
        "Cnt": 450,
        "Text": "Do you sing to yourself?",
        "Match": "FALSE"
    },
    {
        "Cnt": 451,
        "Text": "Do you know any identical twins?",
        "Match": "FALSE"
    },
    {
        "Cnt": 452,
        "Text": "Have you ever given blood?",
        "Match": "FALSE"
    },
    {
        "Cnt": 453,
        "Text": "Could you ever be a medical guineapig?",
        "Match": "FALSE"
    },
    {
        "Cnt": 454,
        "Text": "Whats your favourite radio station?",
        "Match": "FALSE"
    },
    {
        "Cnt": 455,
        "Text": "Whats your favourite letter of the Alphabet?",
        "Match": "FALSE"
    },
    {
        "Cnt": 456,
        "Text": "Which is better? rollerblade or rollerskates?",
        "Match": "FALSE"
    },
    {
        "Cnt": 457,
        "Text": "Have you ever written a love letter?",
        "Match": "FALSE"
    },
    {
        "Cnt": 458,
        "Text": "How many valentines cards did you recieve this/last year?",
        "Match": "FALSE"
    },
    {
        "Cnt": 459,
        "Text": "What are cooler? Dinosaurs or Dragons?",
        "Match": "FALSE"
    },
    {
        "Cnt": 460,
        "Text": "Have you ever made your own ice lollies?",
        "Match": "FALSE"
    },
    {
        "Cnt": 461,
        "Text": "Have you ever made your own Ice cream?",
        "Match": "FALSE"
    },
    {
        "Cnt": 462,
        "Text": "Which forgeign language did you have to learn at school?",
        "Match": "FALSE"
    },
    {
        "Cnt": 463,
        "Text": "and do you still remember enough to hold a conversation in that language?",
        "Match": "FALSE"
    },
    {
        "Cnt": 464,
        "Text": "Do you know CPR?",
        "Match": "FALSE"
    },
    {
        "Cnt": 465,
        "Text": "Do you have any swimming badges?",
        "Match": "FALSE"
    },
    {
        "Cnt": 466,
        "Text": "Do you prefer digital or rotary/analogue clocks?",
        "Match": "FALSE"
    },
    {
        "Cnt": 467,
        "Text": "How tall is the tallest person you know?",
        "Match": "FALSE"
    },
    {
        "Cnt": 468,
        "Text": "Have you ever got lost in a maze?",
        "Match": "FALSE"
    },
    {
        "Cnt": 469,
        "Text": "Have you ever been attacked by a wild animal?",
        "Match": "FALSE"
    },
    {
        "Cnt": 470,
        "Text": "Have you ever ridden a camel?",
        "Match": "FALSE"
    },
    {
        "Cnt": 471,
        "Text": "Whats your opinion on rats?",
        "Match": "FALSE"
    },
    {
        "Cnt": 472,
        "Text": "Have you ever been to a gym?",
        "Match": "FALSE"
    },
    {
        "Cnt": 473,
        "Text": "Have you ever been in a helicopter?",
        "Match": "FALSE"
    },
    {
        "Cnt": 474,
        "Text": "Have you ever cheated at a test?",
        "Match": "FALSE"
    },
    {
        "Cnt": 475,
        "Text": "Have you ever ridden a tractor?",
        "Match": "FALSE"
    },
    {
        "Cnt": 476,
        "Text": "Are you a gossip?",
        "Match": "FALSE"
    },
    {
        "Cnt": 477,
        "Text": "Have you ever cried at a film?",
        "Match": "FALSE"
    },
    {
        "Cnt": 478,
        "Text": "When you're ill do you struggle on regardless or just curl up in bed as much as possible?",
        "Match": "FALSE"
    },
    {
        "Cnt": 479,
        "Text": "Do you need to write down things to remember them?",
        "Match": "FALSE"
    },
    {
        "Cnt": 480,
        "Text": "Do you keep a diary/journal?",
        "Match": "FALSE"
    },
    {
        "Cnt": 481,
        "Text": "Are you scared of thunderstorms?",
        "Match": "FALSE"
    },
    {
        "Cnt": 482,
        "Text": "Do you have any unusual fears or phobias?",
        "Match": "FALSE"
    },
    {
        "Cnt": 483,
        "Text": "Whats your favourite disney movie?",
        "Match": "FALSE"
    },
    {
        "Cnt": 484,
        "Text": "Have you ever slept in a caravan?",
        "Match": "FALSE"
    },
    {
        "Cnt": 485,
        "Text": "Have you ever painted a house?",
        "Match": "FALSE"
    },
    {
        "Cnt": 486,
        "Text": "Have you got green fingers?",
        "Match": "FALSE"
    },
    {
        "Cnt": 487,
        "Text": "Whats the tallest tree you've ever climbed?",
        "Match": "FALSE"
    },
    {
        "Cnt": 488,
        "Text": "Have you ever dialed the talking clock?",
        "Match": "FALSE"
    },
    {
        "Cnt": 489,
        "Text": "Do you always wear identical socks?",
        "Match": "FALSE"
    },
    {
        "Cnt": 490,
        "Text": "Do you live by any motto or philosophy?",
        "Match": "FALSE"
    },
    {
        "Cnt": 491,
        "Text": "Do you lick the yoghurt or desert lid?",
        "Match": "FALSE"
    },
    {
        "Cnt": 492,
        "Text": "Do you lick the spoon clean after making something sweet?",
        "Match": "FALSE"
    },
    {
        "Cnt": 493,
        "Text": "Do you like the sound of music? (the musical/film",
        "Match": "FALSE"
    },
    {
        "Cnt": 494,
        "Text": "Have you ever made your own orangejuice?",
        "Match": "FALSE"
    },
    {
        "Cnt": 495,
        "Text": "Have you ever sucked on a lemon?",
        "Match": "FALSE"
    },
    {
        "Cnt": 496,
        "Text": "Have you ever licked a battery?",
        "Match": "FALSE"
    },
    {
        "Cnt": 497,
        "Text": "Are you a good aim with a rubber band?",
        "Match": "FALSE"
    },
    {
        "Cnt": 498,
        "Text": "Have you ever played golf?",
        "Match": "FALSE"
    },
    {
        "Cnt": 499,
        "Text": "Whats the most unusual name you've ever come across?",
        "Match": "FALSE"
    },

    {
        "Text": "Help!",
        "Match": "FALSE",
        "Cnt": 620
    },
    {
        "Text": "Hello!",
        "Match": "FALSE",
        "Cnt": 621
    },
    {
        "Text": "Hello!",
        "Match": "FALSE",
        "Cnt": 622
    },
    {
        "Text": "Got it?",
        "Match": "FALSE",
        "Cnt": 623
    },
    {
        "Text": "I'm OK",
        "Match": "FALSE",
        "Cnt": 624
    },
    {
        "Text": "Come in",
        "Match": "FALSE",
        "Cnt": 625
    },
    {
        "Text": "Get out!",
        "Match": "FALSE",
        "Cnt": 626
    },
    {
        "Text": "Go away!",
        "Match": "FALSE",
        "Cnt": 627
    },
    {
        "Text": "Goodbye!",
        "Match": "FALSE",
        "Cnt": 628
    },
    {
        "Text": "Welcome",
        "Match": "FALSE",
        "Cnt": 629
    },
    {
        "Text": "Welcome",
        "Match": "FALSE",
        "Cnt": 630
    },
    {
        "Text": "Have fun",
        "Match": "FALSE",
        "Cnt": 631
    },
    {
        "Text": "Have fun",
        "Match": "FALSE",
        "Cnt": 632
    },
    {
        "Text": "Have fun",
        "Match": "FALSE",
        "Cnt": 633
    },
    {
        "Text": "I forgot",
        "Match": "FALSE",
        "Cnt": 634
    },
    {
        "Text": "I forgot",
        "Match": "FALSE",
        "Cnt": 635
    },
    {
        "Text": "I'll pay",
        "Match": "FALSE",
        "Cnt": 636
    },
    {
        "Text": "I'm fine",
        "Match": "FALSE",
        "Cnt": 637
    },
    {
        "Text": "I'm full",
        "Match": "FALSE",
        "Cnt": 638
    },
    {
        "Text": "Let's go!",
        "Match": "FALSE",
        "Cnt": 639
    },
    {
        "Text": "Answer me",
        "Match": "FALSE",
        "Cnt": 640
    },
    {
        "Text": "Birds fly",
        "Match": "FALSE",
        "Cnt": 641
    },
    {
        "Text": "Excuse me",
        "Match": "FALSE",
        "Cnt": 642
    },
    {
        "Text": "I fear so",
        "Match": "FALSE",
        "Cnt": 643
    },
    {
        "Text": "I laughed",
        "Match": "FALSE",
        "Cnt": 644
    },
    {
        "Text": "I'm bored",
        "Match": "FALSE",
        "Cnt": 645
    },
    {
        "Text": "I'm broke",
        "Match": "FALSE",
        "Cnt": 646
    },
    {
        "Text": "I'm tired",
        "Match": "FALSE",
        "Cnt": 647
    },
    {
        "Text": "It's cold",
        "Match": "FALSE",
        "Cnt": 648
    },
    {
        "Text": "Who knows?",
        "Match": "FALSE",
        "Cnt": 649
    },
    {
        "Text": "Who knows?",
        "Match": "FALSE",
        "Cnt": 650
    },
    {
        "Text": "Who knows?",
        "Match": "FALSE",
        "Cnt": 651
    },
    {
        "Text": "Who knows?",
        "Match": "FALSE",
        "Cnt": 652
    },
    {
        "Text": "Birds sing",
        "Match": "FALSE",
        "Cnt": 653
    },
    {
        "Text": "Come on in",
        "Match": "FALSE",
        "Cnt": 654
    },
    {
        "Text": "Don't move",
        "Match": "FALSE",
        "Cnt": 655
    },
    {
        "Text": "Fire burns",
        "Match": "FALSE",
        "Cnt": 656
    },
    {
        "Text": "Follow him",
        "Match": "FALSE",
        "Cnt": 657
    },
    {
        "Text": "I am tired",
        "Match": "FALSE",
        "Cnt": 658
    },
    {
        "Text": "I can swim",
        "Match": "FALSE",
        "Cnt": 659
    },
    {
        "Text": "I can swim",
        "Match": "FALSE",
        "Cnt": 660
    },
    {
        "Text": "I love you",
        "Match": "FALSE",
        "Cnt": 661
    },
    {
        "Text": "I love you",
        "Match": "FALSE",
        "Cnt": 662
    },
    {
        "Text": "I love you",
        "Match": "FALSE",
        "Cnt": 663
    },
    {
        "Text": "I love you",
        "Match": "FALSE",
        "Cnt": 664
    },
    {
        "Text": "I love you",
        "Match": "FALSE",
        "Cnt": 665
    },
    {
        "Text": "I will try",
        "Match": "FALSE",
        "Cnt": 666
    },
    {
        "Text": "I'm coming",
        "Match": "FALSE",
        "Cnt": 667
    },
    {
        "Text": "I'm hungry!",
        "Match": "FALSE",
        "Cnt": 668
    },
    {
        "Text": "I'm hungry!",
        "Match": "FALSE",
        "Cnt": 669
    },
    {
        "Text": "Let him in",
        "Match": "FALSE",
        "Cnt": 670
    },
    {
        "Text": "Let him in",
        "Match": "FALSE",
        "Cnt": 671
    },
    {
        "Text": "Let me out!",
        "Match": "FALSE",
        "Cnt": 672
    },
    {
        "Text": "Once again",
        "Match": "FALSE",
        "Cnt": 673
    },
    {
        "Text": "Please sit",
        "Match": "FALSE",
        "Cnt": 674
    },
    {
        "Text": "What's new?",
        "Match": "FALSE",
        "Cnt": 675
    },
    {
        "Text": "What's new?",
        "Match": "FALSE",
        "Cnt": 676
    },
    {
        "Text": "Who's that?",
        "Match": "FALSE",
        "Cnt": 677
    },
    {
        "Text": "Don't shout",
        "Match": "FALSE",
        "Cnt": 678
    },
    {
        "Text": "Don't shout",
        "Match": "FALSE",
        "Cnt": 679
    },
    {
        "Text": "He stood up",
        "Match": "FALSE",
        "Cnt": 680
    },
    {
        "Text": "He's strong",
        "Match": "FALSE",
        "Cnt": 681
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 682
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 683
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 684
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 685
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 686
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 687
    },
    {
        "Text": "How are you?",
        "Match": "FALSE",
        "Cnt": 688
    },
    {
        "Text": "I am hungry",
        "Match": "FALSE",
        "Cnt": 689
    },
    {
        "Text": "I like both",
        "Match": "FALSE",
        "Cnt": 690
    },
    {
        "Text": "I like cake",
        "Match": "FALSE",
        "Cnt": 691
    },
    {
        "Text": "I like dogs",
        "Match": "FALSE",
        "Cnt": 692
    },
    {
        "Text": "I like math",
        "Match": "FALSE",
        "Cnt": 693
    },
    {
        "Text": "I'll attend",
        "Match": "FALSE",
        "Cnt": 694
    },
    {
        "Text": "Nobody came",
        "Match": "FALSE",
        "Cnt": 695
    },
    {
        "Text": "Was I wrong?",
        "Match": "FALSE",
        "Cnt": 696
    },
    {
        "Text": "What's this?",
        "Match": "FALSE",
        "Cnt": 697
    },
    {
        "Text": "Are you sick?",
        "Match": "FALSE",
        "Cnt": 698
    },
    {
        "Text": "Bring him in",
        "Match": "FALSE",
        "Cnt": 699
    },
    {
        "Text": "Come with us",
        "Match": "FALSE",
        "Cnt": 700
    },
    {
        "Text": "Happy Easter!",
        "Match": "FALSE",
        "Cnt": 701
    },
    {
        "Text": "Has Tom left?",
        "Match": "FALSE",
        "Cnt": 702
    },
    {
        "Text": "He is French",
        "Match": "FALSE",
        "Cnt": 703
    },
    {
        "Text": "I am at home",
        "Match": "FALSE",
        "Cnt": 704
    },
    {
        "Text": "I can't move",
        "Match": "FALSE",
        "Cnt": 705
    },
    {
        "Text": "I don't know",
        "Match": "FALSE",
        "Cnt": 706
    },
    {
        "Text": "I don't know",
        "Match": "FALSE",
        "Cnt": 707
    },
    {
        "Text": "I have a car",
        "Match": "FALSE",
        "Cnt": 708
    },
    {
        "Text": "I have a dog",
        "Match": "FALSE",
        "Cnt": 709
    },
    {
        "Text": "I understand",
        "Match": "FALSE",
        "Cnt": 710
    },
    {
        "Text": "I'm a doctor",
        "Match": "FALSE",
        "Cnt": 711
    },
    {
        "Text": "I'm starving!",
        "Match": "FALSE",
        "Cnt": 712
    },
    {
        "Text": "It is a book",
        "Match": "FALSE",
        "Cnt": 713
    },
    {
        "Text": "It's snowing",
        "Match": "FALSE",
        "Cnt": 714
    },
    {
        "Text": "It's too big",
        "Match": "FALSE",
        "Cnt": 715
    },
    {
        "Text": "Please leave",
        "Match": "FALSE",
        "Cnt": 716
    },
    {
        "Text": "We are happy",
        "Match": "FALSE",
        "Cnt": 717
    },
    {
        "Text": "What is this?",
        "Match": "FALSE",
        "Cnt": 718
    },
    {
        "Text": "Are you tired?",
        "Match": "FALSE",
        "Cnt": 719
    },
    {
        "Text": "Can you drive?",
        "Match": "FALSE",
        "Cnt": 720
    },
    {
        "Text": "Don't get fat",
        "Match": "FALSE",
        "Cnt": 721
    },
    {
        "Text": "Don't give in",
        "Match": "FALSE",
        "Cnt": 722
    },
    {
        "Text": "Drink it down",
        "Match": "FALSE",
        "Cnt": 723
    },
    {
        "Text": "Everyone dies",
        "Match": "FALSE",
        "Cnt": 724
    },
    {
        "Text": "Flowers bloom",
        "Match": "FALSE",
        "Cnt": 725
    },
    {
        "Text": "I am who I am",
        "Match": "FALSE",
        "Cnt": 726
    },
    {
        "Text": "I'll take him",
        "Match": "FALSE",
        "Cnt": 727
    },
    {
        "Text": "I'm tired now",
        "Match": "FALSE",
        "Cnt": 728
    },
    {
        "Text": "I'm very busy",
        "Match": "FALSE",
        "Cnt": 729
    },
    {
        "Text": "Is that a cat?",
        "Match": "FALSE",
        "Cnt": 730
    },
    {
        "Text": "It's for free",
        "Match": "FALSE",
        "Cnt": 731
    },
    {
        "Text": "It's for free",
        "Match": "FALSE",
        "Cnt": 732
    },
    {
        "Text": "Let me try it",
        "Match": "FALSE",
        "Cnt": 733
    },
    {
        "Text": "Let me try it",
        "Match": "FALSE",
        "Cnt": 734
    },
    {
        "Text": "Let me try it",
        "Match": "FALSE",
        "Cnt": 735
    },
    {
        "Text": "Make it quick",
        "Match": "FALSE",
        "Cnt": 736
    },
    {
        "Text": "May I come in?",
        "Match": "FALSE",
        "Cnt": 737
    },
    {
        "Text": "Open the door",
        "Match": "FALSE",
        "Cnt": 738
    },
    {
        "Text": "Open the door",
        "Match": "FALSE",
        "Cnt": 739
    },
    {
        "Text": "Please get in",
        "Match": "FALSE",
        "Cnt": 740
    },
    {
        "Text": "Read it again",
        "Match": "FALSE",
        "Cnt": 741
    },
    {
        "Text": "Read it aloud",
        "Match": "FALSE",
        "Cnt": 742
    },
    {
        "Text": "She bent down",
        "Match": "FALSE",
        "Cnt": 743
    },
    {
        "Text": "Some fish fly",
        "Match": "FALSE",
        "Cnt": 744
    },
    {
        "Text": "This is a map",
        "Match": "FALSE",
        "Cnt": 745
    },
    {
        "Text": "Tom is my son",
        "Match": "FALSE",
        "Cnt": 746
    },
    {
        "Text": "We're in town",
        "Match": "FALSE",
        "Cnt": 747
    },
    {
        "Text": "Were you shot?",
        "Match": "FALSE",
        "Cnt": 748
    },
    {
        "Text": "What about us?",
        "Match": "FALSE",
        "Cnt": 749
    },
    {
        "Text": "Can I help you?",
        "Match": "FALSE",
        "Cnt": 750
    },
    {
        "Text": "Can I help you?",
        "Match": "FALSE",
        "Cnt": 751
    },
    {
        "Text": "Clean the room",
        "Match": "FALSE",
        "Cnt": 752
    },
    {
        "Text": "Don't touch it",
        "Match": "FALSE",
        "Cnt": 753
    },
    {
        "Text": "Get out of bed!",
        "Match": "FALSE",
        "Cnt": 754
    },
    {
        "Text": "Happy New Year!",
        "Match": "FALSE",
        "Cnt": 755
    },
    {
        "Text": "Happy New Year!",
        "Match": "FALSE",
        "Cnt": 756
    },
    {
        "Text": "Happy birthday!",
        "Match": "FALSE",
        "Cnt": 757
    },
    {
        "Text": "He has a beard",
        "Match": "FALSE",
        "Cnt": 758
    },
    {
        "Text": "He is an actor",
        "Match": "FALSE",
        "Cnt": 759
    },
    {
        "Text": "He needs money",
        "Match": "FALSE",
        "Cnt": 760
    },
    {
        "Text": "He was hard up",
        "Match": "FALSE",
        "Cnt": 761
    },
    {
        "Text": "I like history",
        "Match": "FALSE",
        "Cnt": 762
    },
    {
        "Text": "I like the dog",
        "Match": "FALSE",
        "Cnt": 763
    },
    {
        "Text": "I must buy one",
        "Match": "FALSE",
        "Cnt": 764
    },
    {
        "Text": "I'll come back",
        "Match": "FALSE",
        "Cnt": 765
    },
    {
        "Text": "I'll phone you",
        "Match": "FALSE",
        "Cnt": 766
    },
    {
        "Text": "I'll stay home",
        "Match": "FALSE",
        "Cnt": 767
    },
    {
        "Text": "I'm an atheist",
        "Match": "FALSE",
        "Cnt": 768
    },
    {
        "Text": "I'm an atheist",
        "Match": "FALSE",
        "Cnt": 769
    },
    {
        "Text": "I'm very tired",
        "Match": "FALSE",
        "Cnt": 770
    },
    {
        "Text": "It's hot today",
        "Match": "FALSE",
        "Cnt": 771
    },
    {
        "Text": "It's this book",
        "Match": "FALSE",
        "Cnt": 772
    },
    {
        "Text": "It's your move",
        "Match": "FALSE",
        "Cnt": 773
    },
    {
        "Text": "Only God knows",
        "Match": "FALSE",
        "Cnt": 774
    },
    {
        "Text": "Summer is over",
        "Match": "FALSE",
        "Cnt": 775
    },
    {
        "Text": "Take your time",
        "Match": "FALSE",
        "Cnt": 776
    },
    {
        "Text": "Think about it",
        "Match": "FALSE",
        "Cnt": 777
    },
    {
        "Text": "This is a book",
        "Match": "FALSE",
        "Cnt": 778
    },
    {
        "Text": "This is a book",
        "Match": "FALSE",
        "Cnt": 779
    },
    {
        "Text": "This is my bag",
        "Match": "FALSE",
        "Cnt": 780
    },
    {
        "Text": "This is my dog",
        "Match": "FALSE",
        "Cnt": 781
    },
    {
        "Text": "Wash your feet",
        "Match": "FALSE",
        "Cnt": 782
    },
    {
        "Text": "We study music",
        "Match": "FALSE",
        "Cnt": 783
    },
    {
        "Text": "We'll call you",
        "Match": "FALSE",
        "Cnt": 784
    },
    {
        "Text": "We'll call you",
        "Match": "FALSE",
        "Cnt": 785
    },
    {
        "Text": "Where were you?",
        "Match": "FALSE",
        "Cnt": 786
    },
    {
        "Text": "Where were you?",
        "Match": "FALSE",
        "Cnt": 787
    },
    {
        "Text": "You have to go",
        "Match": "FALSE",
        "Cnt": 788
    },
    {
        "Text": "You look tired",
        "Match": "FALSE",
        "Cnt": 789
    },
    {
        "Text": "You're kidding!",
        "Match": "FALSE",
        "Cnt": 790
    },
    {
        "Text": "A man must work",
        "Match": "FALSE",
        "Cnt": 791
    },
    {
        "Text": "Are you at home?",
        "Match": "FALSE",
        "Cnt": 792
    },
    {
        "Text": "Are you guys OK?",
        "Match": "FALSE",
        "Cnt": 793
    },
    {
        "Text": "Come home early",
        "Match": "FALSE",
        "Cnt": 794
    },
    {
        "Text": "Come if you can",
        "Match": "FALSE",
        "Cnt": 795
    },
    {
        "Text": "Did he go there?",
        "Match": "FALSE",
        "Cnt": 796
    },
    {
        "Text": "Did you miss me?",
        "Match": "FALSE",
        "Cnt": 797
    },
    {
        "Text": "Don't be absurd",
        "Match": "FALSE",
        "Cnt": 798
    },
    {
        "Text": "He came running",
        "Match": "FALSE",
        "Cnt": 799
    },
    {
        "Text": "He can't be ill",
        "Match": "FALSE",
        "Cnt": 800
    },
    {
        "Text": "He has a hat on",
        "Match": "FALSE",
        "Cnt": 801
    },
    {
        "Text": "He reads Arabic",
        "Match": "FALSE",
        "Cnt": 802
    },
    {
        "Text": "He's my husband",
        "Match": "FALSE",
        "Cnt": 803
    },
    {
        "Text": "How is everyone?",
        "Match": "FALSE",
        "Cnt": 804
    },
    {
        "Text": "How is it going?",
        "Match": "FALSE",
        "Cnt": 805
    },
    {
        "Text": "How old are you?",
        "Match": "FALSE",
        "Cnt": 806
    },
    {
        "Text": "How rude of you!",
        "Match": "FALSE",
        "Cnt": 807
    },
    {
        "Text": "How rude of you!",
        "Match": "FALSE",
        "Cnt": 808
    },
    {
        "Text": "I cooked dinner",
        "Match": "FALSE",
        "Cnt": 809
    },
    {
        "Text": "I feel nauseous",
        "Match": "FALSE",
        "Cnt": 810
    },
    {
        "Text": "I go every year",
        "Match": "FALSE",
        "Cnt": 811
    },
    {
        "Text": "I heard a noise",
        "Match": "FALSE",
        "Cnt": 812
    },
    {
        "Text": "I like this one",
        "Match": "FALSE",
        "Cnt": 813
    },
    {
        "Text": "I run every day",
        "Match": "FALSE",
        "Cnt": 814
    },
    {
        "Text": "I saw her again",
        "Match": "FALSE",
        "Cnt": 815
    },
    {
        "Text": "I want a guitar",
        "Match": "FALSE",
        "Cnt": 816
    },
    {
        "Text": "I was assaulted",
        "Match": "FALSE",
        "Cnt": 817
    },
    {
        "Text": "I'm a good cook",
        "Match": "FALSE",
        "Cnt": 818
    },
    {
        "Text": "I'm a good cook",
        "Match": "FALSE",
        "Cnt": 819
    },
    {
        "Text": "I'm lucky today",
        "Match": "FALSE",
        "Cnt": 820
    },
    {
        "Text": "Is anybody here?",
        "Match": "FALSE",
        "Cnt": 821
    },
    {
        "Text": "Is it not black?",
        "Match": "FALSE",
        "Cnt": 822
    },
    {
        "Text": "Is there a cafe?",
        "Match": "FALSE",
        "Cnt": 823
    },
    {
        "Text": "Let's fly kites",
        "Match": "FALSE",
        "Cnt": 824
    },
    {
        "Text": "No, I didn't go",
        "Match": "FALSE",
        "Cnt": 825
    },
    {
        "Text": "Nobody's around",
        "Match": "FALSE",
        "Cnt": 826
    },
    {
        "Text": "Now stop crying",
        "Match": "FALSE",
        "Cnt": 827
    },
    {
        "Text": "Open your mouth!",
        "Match": "FALSE",
        "Cnt": 828
    },
    {
        "Text": "Please sit down",
        "Match": "FALSE",
        "Cnt": 829
    },
    {
        "Text": "She is a beauty",
        "Match": "FALSE",
        "Cnt": 830
    },
    {
        "Text": "She talks a lot",
        "Match": "FALSE",
        "Cnt": 831
    },
    {
        "Text": "She talks a lot",
        "Match": "FALSE",
        "Cnt": 832
    },
    {
        "Text": "That isn't fair",
        "Match": "FALSE",
        "Cnt": 833
    },
    {
        "Text": "That's my fault",
        "Match": "FALSE",
        "Cnt": 834
    },
    {
        "Text": "The dog is mine",
        "Match": "FALSE",
        "Cnt": 835
    },
    {
        "Text": "The power's out",
        "Match": "FALSE",
        "Cnt": 836
    },
    {
        "Text": "These are birds",
        "Match": "FALSE",
        "Cnt": 837
    },
    {
        "Text": "This is for you",
        "Match": "FALSE",
        "Cnt": 838
    },
    {
        "Text": "We lack nothing",
        "Match": "FALSE",
        "Cnt": 839
    },
    {
        "Text": "We study Arabic",
        "Match": "FALSE",
        "Cnt": 840
    },
    {
        "Text": "What time is it?",
        "Match": "FALSE",
        "Cnt": 841
    },
    {
        "Text": "What time is it?",
        "Match": "FALSE",
        "Cnt": 842
    },
    {
        "Text": "Where's my book?",
        "Match": "FALSE",
        "Cnt": 843
    },
    {
        "Text": "You startled me!",
        "Match": "FALSE",
        "Cnt": 844
    },
    {
        "Text": "You're a person",
        "Match": "FALSE",
        "Cnt": 845
    },
    {
        "Text": "Are you a doctor?",
        "Match": "FALSE",
        "Cnt": 846
    },
    {
        "Text": "Can you teach me?",
        "Match": "FALSE",
        "Cnt": 847
    },
    {
        "Text": "Climb to the top",
        "Match": "FALSE",
        "Cnt": 848
    },
    {
        "Text": "Come and join us",
        "Match": "FALSE",
        "Cnt": 849
    },
    {
        "Text": "Come sit with us",
        "Match": "FALSE",
        "Cnt": 850
    },
    {
        "Text": "Cut the potatoes",
        "Match": "FALSE",
        "Cnt": 851
    },
    {
        "Text": "Do you have rice?",
        "Match": "FALSE",
        "Cnt": 852
    },
    {
        "Text": "Don't make faces",
        "Match": "FALSE",
        "Cnt": 853
    },
    {
        "Text": "Don't make noise",
        "Match": "FALSE",
        "Cnt": 854
    },
    {
        "Text": "Have a good time",
        "Match": "FALSE",
        "Cnt": 855
    },
    {
        "Text": "Have a nice time",
        "Match": "FALSE",
        "Cnt": 856
    },
    {
        "Text": "He has long legs",
        "Match": "FALSE",
        "Cnt": 857
    },
    {
        "Text": "He is her friend",
        "Match": "FALSE",
        "Cnt": 858
    },
    {
        "Text": "He likes oranges",
        "Match": "FALSE",
        "Cnt": 859
    },
    {
        "Text": "He likes oranges",
        "Match": "FALSE",
        "Cnt": 860
    },
    {
        "Text": "He must love you",
        "Match": "FALSE",
        "Cnt": 861
    },
    {
        "Text": "He speaks Arabic",
        "Match": "FALSE",
        "Cnt": 862
    },
    {
        "Text": "Here is your bag",
        "Match": "FALSE",
        "Cnt": 863
    },
    {
        "Text": "I can't remember",
        "Match": "FALSE",
        "Cnt": 864
    },
    {
        "Text": "I don't know him",
        "Match": "FALSE",
        "Cnt": 865
    },
    {
        "Text": "I have a problem",
        "Match": "FALSE",
        "Cnt": 866
    },
    {
        "Text": "I have to go now",
        "Match": "FALSE",
        "Cnt": 867
    },
    {
        "Text": "I live near here",
        "Match": "FALSE",
        "Cnt": 868
    },
    {
        "Text": "I love my mother",
        "Match": "FALSE",
        "Cnt": 869
    },
    {
        "Text": "I must leave now",
        "Match": "FALSE",
        "Cnt": 870
    },
    {
        "Text": "I'm really tired",
        "Match": "FALSE",
        "Cnt": 871
    },
    {
        "Text": "I'm very thirsty",
        "Match": "FALSE",
        "Cnt": 872
    },
    {
        "Text": "It's April first",
        "Match": "FALSE",
        "Cnt": 873
    },
    {
        "Text": "It's now my turn",
        "Match": "FALSE",
        "Cnt": 874
    },
    {
        "Text": "Nice to meet you",
        "Match": "FALSE",
        "Cnt": 875
    },
    {
        "Text": "Please follow me",
        "Match": "FALSE",
        "Cnt": 876
    },
    {
        "Text": "Please sign here",
        "Match": "FALSE",
        "Cnt": 877
    },
    {
        "Text": "She betrayed you",
        "Match": "FALSE",
        "Cnt": 878
    },
    {
        "Text": "Sit down, please",
        "Match": "FALSE",
        "Cnt": 879
    },
    {
        "Text": "The car is ready",
        "Match": "FALSE",
        "Cnt": 880
    },
    {
        "Text": "This is your dog",
        "Match": "FALSE",
        "Cnt": 881
    },
    {
        "Text": "This is your key",
        "Match": "FALSE",
        "Cnt": 882
    },
    {
        "Text": "Tom is my friend",
        "Match": "FALSE",
        "Cnt": 883
    },
    {
        "Text": "We're going home",
        "Match": "FALSE",
        "Cnt": 884
    },
    {
        "Text": "We're in a hurry",
        "Match": "FALSE",
        "Cnt": 885
    },
    {
        "Text": "Welcome to Japan",
        "Match": "FALSE",
        "Cnt": 886
    },
    {
        "Text": "What is your age?",
        "Match": "FALSE",
        "Cnt": 887
    },
    {
        "Text": "What's that bird?",
        "Match": "FALSE",
        "Cnt": 888
    },
    {
        "Text": "What's the story?",
        "Match": "FALSE",
        "Cnt": 889
    },
    {
        "Text": "What's your name?",
        "Match": "FALSE",
        "Cnt": 890
    },
    {
        "Text": "Where did you go?",
        "Match": "FALSE",
        "Cnt": 891
    },
    {
        "Text": "Where is the bar?",
        "Match": "FALSE",
        "Cnt": 892
    },
    {
        "Text": "Whose turn is it?",
        "Match": "FALSE",
        "Cnt": 893
    },
    {
        "Text": "You may be right",
        "Match": "FALSE",
        "Cnt": 894
    },
    {
        "Text": "Are your eyes bad?",
        "Match": "FALSE",
        "Cnt": 895
    },
    {
        "Text": "Birds build nests",
        "Match": "FALSE",
        "Cnt": 896
    },
    {
        "Text": "Birds build nests",
        "Match": "FALSE",
        "Cnt": 897
    },
    {
        "Text": "Boys will be boys",
        "Match": "FALSE",
        "Cnt": 898
    },
    {
        "Text": "Can I do anything?",
        "Match": "FALSE",
        "Cnt": 899
    },
    {
        "Text": "Didn't you go out?",
        "Match": "FALSE",
        "Cnt": 900
    },
    {
        "Text": "Didn't you go out?",
        "Match": "FALSE",
        "Cnt": 901
    },
    {
        "Text": "Didn't you go out?",
        "Match": "FALSE",
        "Cnt": 902
    },
    {
        "Text": "Do you believe me?",
        "Match": "FALSE",
        "Cnt": 903
    },
    {
        "Text": "Do you believe me?",
        "Match": "FALSE",
        "Cnt": 904
    },
    {
        "Text": "Do you believe me?",
        "Match": "FALSE",
        "Cnt": 905
    },
    {
        "Text": "Don't deceive him",
        "Match": "FALSE",
        "Cnt": 906
    },
    {
        "Text": "He began to shout",
        "Match": "FALSE",
        "Cnt": 907
    },
    {
        "Text": "He came to see me",
        "Match": "FALSE",
        "Cnt": 908
    },
    {
        "Text": "He employs a maid",
        "Match": "FALSE",
        "Cnt": 909
    },
    {
        "Text": "He is after a job",
        "Match": "FALSE",
        "Cnt": 910
    },
    {
        "Text": "He is walking now",
        "Match": "FALSE",
        "Cnt": 911
    },
    {
        "Text": "He studied abroad",
        "Match": "FALSE",
        "Cnt": 912
    },
    {
        "Text": "He turned traitor",
        "Match": "FALSE",
        "Cnt": 913
    },
    {
        "Text": "He's already left",
        "Match": "FALSE",
        "Cnt": 914
    },
    {
        "Text": "I can drive a car",
        "Match": "FALSE",
        "Cnt": 915
    },
    {
        "Text": "I cried all night",
        "Match": "FALSE",
        "Cnt": 916
    },
    {
        "Text": "I got very sleepy",
        "Match": "FALSE",
        "Cnt": 917
    },
    {
        "Text": "I have a headache",
        "Match": "FALSE",
        "Cnt": 918
    },
    {
        "Text": "I have a headache",
        "Match": "FALSE",
        "Cnt": 919
    },
    {
        "Text": "I have some money",
        "Match": "FALSE",
        "Cnt": 920
    },
    {
        "Text": "I haven't met him",
        "Match": "FALSE",
        "Cnt": 921
    },
    {
        "Text": "I listen to music",
        "Match": "FALSE",
        "Cnt": 922
    },
    {
        "Text": "I saw him running",
        "Match": "FALSE",
        "Cnt": 923
    },
    {
        "Text": "I saw him running",
        "Match": "FALSE",
        "Cnt": 924
    },
    {
        "Text": "I truly loved her",
        "Match": "FALSE",
        "Cnt": 925
    },
    {
        "Text": "I work for a bank",
        "Match": "FALSE",
        "Cnt": 926
    },
    {
        "Text": "I'm getting happy",
        "Match": "FALSE",
        "Cnt": 927
    },
    {
        "Text": "I'm not a student",
        "Match": "FALSE",
        "Cnt": 928
    },
    {
        "Text": "I'm not like that",
        "Match": "FALSE",
        "Cnt": 929
    },
    {
        "Text": "I'm really hungry",
        "Match": "FALSE",
        "Cnt": 930
    },
    {
        "Text": "It's not my fault",
        "Match": "FALSE",
        "Cnt": 931
    },
    {
        "Text": "It's starting now",
        "Match": "FALSE",
        "Cnt": 932
    },
    {
        "Text": "My bag was stolen",
        "Match": "FALSE",
        "Cnt": 933
    },
    {
        "Text": "My eyes are tired",
        "Match": "FALSE",
        "Cnt": 934
    },
    {
        "Text": "No one's in sight",
        "Match": "FALSE",
        "Cnt": 935
    },
    {
        "Text": "Put your hands up!",
        "Match": "FALSE",
        "Cnt": 936
    },
    {
        "Text": "She began to sing",
        "Match": "FALSE",
        "Cnt": 937
    },
    {
        "Text": "She has blue eyes",
        "Match": "FALSE",
        "Cnt": 938
    },
    {
        "Text": "She isn't married",
        "Match": "FALSE",
        "Cnt": 939
    },
    {
        "Text": "Tell me the truth",
        "Match": "FALSE",
        "Cnt": 940
    },
    {
        "Text": "The earth rotates",
        "Match": "FALSE",
        "Cnt": 941
    },
    {
        "Text": "Try it once again",
        "Match": "FALSE",
        "Cnt": 942
    },
    {
        "Text": "Try it once again",
        "Match": "FALSE",
        "Cnt": 943
    },
    {
        "Text": "Turn on the radio",
        "Match": "FALSE",
        "Cnt": 944
    },
    {
        "Text": "We don't know her",
        "Match": "FALSE",
        "Cnt": 945
    },
    {
        "Text": "We don't know him",
        "Match": "FALSE",
        "Cnt": 946
    },
    {
        "Text": "We have good news",
        "Match": "FALSE",
        "Cnt": 947
    },
    {
        "Text": "What is happiness?",
        "Match": "FALSE",
        "Cnt": 948
    },
    {
        "Text": "What is happiness?",
        "Match": "FALSE",
        "Cnt": 949
    },
    {
        "Text": "What is your name?",
        "Match": "FALSE",
        "Cnt": 950
    },
    {
        "Text": "What's the matter?",
        "Match": "FALSE",
        "Cnt": 951
    },
    {
        "Text": "Where do you live?",
        "Match": "FALSE",
        "Cnt": 952
    },
    {
        "Text": "Where do you live?",
        "Match": "FALSE",
        "Cnt": 953
    },
    {
        "Text": "Where do you live?",
        "Match": "FALSE",
        "Cnt": 954
    },
    {
        "Text": "Where do you live?",
        "Match": "FALSE",
        "Cnt": 955
    },
    {
        "Text": "Where do you live?",
        "Match": "FALSE",
        "Cnt": 956
    },
    {
        "Text": "Where is the book?",
        "Match": "FALSE",
        "Cnt": 957
    },
    {
        "Text": "Who made this pie?",
        "Match": "FALSE",
        "Cnt": 958
    },
    {
        "Text": "Yes",
        "Match": "FALSE",
        "Cnt": 959
    },
    {
        "Text": "You have to leave",
        "Match": "FALSE",
        "Cnt": 960
    },
    {
        "Text": "Are you busy today?",
        "Match": "FALSE",
        "Cnt": 961
    },
    {
        "Text": "Are you busy today?",
        "Match": "FALSE",
        "Cnt": 962
    },
    {
        "Text": "Can we have a talk?",
        "Match": "FALSE",
        "Cnt": 963
    },
    {
        "Text": "Come along with us",
        "Match": "FALSE",
        "Cnt": 964
    },
    {
        "Text": "Did you sleep well?",
        "Match": "FALSE",
        "Cnt": 965
    },
    {
        "Text": "Do you remember me?",
        "Match": "FALSE",
        "Cnt": 966
    },
    {
        "Text": "Don't give up hope",
        "Match": "FALSE",
        "Cnt": 967
    },
    {
        "Text": "Don't throw stones",
        "Match": "FALSE",
        "Cnt": 968
    },
    {
        "Text": "Everyone likes her",
        "Match": "FALSE",
        "Cnt": 969
    },
    {
        "Text": "Everyone likes him",
        "Match": "FALSE",
        "Cnt": 970
    },
    {
        "Text": "Have you gone nuts?",
        "Match": "FALSE",
        "Cnt": 971
    },
    {
        "Text": "He breathed deeply",
        "Match": "FALSE",
        "Cnt": 972
    },
    {
        "Text": "He closed his eyes",
        "Match": "FALSE",
        "Cnt": 973
    },
    {
        "Text": "He cried and cried",
        "Match": "FALSE",
        "Cnt": 974
    },
    {
        "Text": "He is a simple man",
        "Match": "FALSE",
        "Cnt": 975
    },
    {
        "Text": "He is sure to come",
        "Match": "FALSE",
        "Cnt": 976
    },
    {
        "Text": "He isn't my cousin",
        "Match": "FALSE",
        "Cnt": 977
    },
    {
        "Text": "He isn't my cousin",
        "Match": "FALSE",
        "Cnt": 978
    },
    {
        "Text": "He waited his turn",
        "Match": "FALSE",
        "Cnt": 979
    },
    {
        "Text": "He works at a bank",
        "Match": "FALSE",
        "Cnt": 980
    },
    {
        "Text": "He's a good person",
        "Match": "FALSE",
        "Cnt": 981
    },
    {
        "Text": "I admit my mistake",
        "Match": "FALSE",
        "Cnt": 982
    },
    {
        "Text": "I can read English",
        "Match": "FALSE",
        "Cnt": 983
    },
    {
        "Text": "I can read English",
        "Match": "FALSE",
        "Cnt": 984
    },
    {
        "Text": "I can't believe it!",
        "Match": "FALSE",
        "Cnt": 985
    },
    {
        "Text": "I heard him go out",
        "Match": "FALSE",
        "Cnt": 986
    },
    {
        "Text": "I know her address",
        "Match": "FALSE",
        "Cnt": 987
    },
    {
        "Text": "I know his address",
        "Match": "FALSE",
        "Cnt": 988
    },
    {
        "Text": "I know those women",
        "Match": "FALSE",
        "Cnt": 989
    },
    {
        "Text": "I know your father",
        "Match": "FALSE",
        "Cnt": 990
    },
    {
        "Text": "I sort of like him",
        "Match": "FALSE",
        "Cnt": 991
    },
    {
        "Text": "I still don't know",
        "Match": "FALSE",
        "Cnt": 992
    },
    {
        "Text": "I was born in 1960",
        "Match": "FALSE",
        "Cnt": 993
    },
    {
        "Text": "I was born in 1979",
        "Match": "FALSE",
        "Cnt": 994
    },
    {
        "Text": "I watch television",
        "Match": "FALSE",
        "Cnt": 995
    },
    {
        "Text": "I worked all night",
        "Match": "FALSE",
        "Cnt": 996
    },
    {
        "Text": "I worked all night",
        "Match": "FALSE",
        "Cnt": 997
    },
    {
        "Text": "I'll see you later",
        "Match": "FALSE",
        "Cnt": 998
    },
    {
        "Text": "I'll see you later",
        "Match": "FALSE",
        "Cnt": 999
    },
    {
        "Text": "I'm as tall as you",
        "Match": "FALSE",
        "Cnt": 1000
    },
    {
        "Text": "I'm coming at once",
        "Match": "FALSE",
        "Cnt": 1001
    },
    {
        "Text": "Is this book yours?",
        "Match": "FALSE",
        "Cnt": 1002
    },
    {
        "Text": "It is already dark",
        "Match": "FALSE",
        "Cnt": 1003
    },
    {
        "Text": "It looks like snow",
        "Match": "FALSE",
        "Cnt": 1004
    },
    {
        "Text": "It started to snow",
        "Match": "FALSE",
        "Cnt": 1005
    },
    {
        "Text": "It was sort of fun",
        "Match": "FALSE",
        "Cnt": 1006
    },
    {
        "Text": "It's mine, not his",
        "Match": "FALSE",
        "Cnt": 1007
    },
    {
        "Text": "It's mine, not his",
        "Match": "FALSE",
        "Cnt": 1008
    },
    {
        "Text": "It's too expensive!",
        "Match": "FALSE",
        "Cnt": 1009
    },
    {
        "Text": "It's too expensive!",
        "Match": "FALSE",
        "Cnt": 1010
    },
    {
        "Text": "It's very hot here",
        "Match": "FALSE",
        "Cnt": 1011
    },
    {
        "Text": "Let me handle this",
        "Match": "FALSE",
        "Cnt": 1012
    },
    {
        "Text": "Let's take a train",
        "Match": "FALSE",
        "Cnt": 1013
    },
    {
        "Text": "My car is a Toyota",
        "Match": "FALSE",
        "Cnt": 1014
    },
    {
        "Text": "My family is small",
        "Match": "FALSE",
        "Cnt": 1015
    },
    {
        "Text": "My wife is Chinese",
        "Match": "FALSE",
        "Cnt": 1016
    },
    {
        "Text": "My wife is Chinese",
        "Match": "FALSE",
        "Cnt": 1017
    },
    {
        "Text": "No one can help me",
        "Match": "FALSE",
        "Cnt": 1018
    },
    {
        "Text": "She is very pretty",
        "Match": "FALSE",
        "Cnt": 1019
    },
    {
        "Text": "She leaped for joy",
        "Match": "FALSE",
        "Cnt": 1020
    },
    {
        "Text": "She smiled happily",
        "Match": "FALSE",
        "Cnt": 1021
    },
    {
        "Text": "She's not a doctor",
        "Match": "FALSE",
        "Cnt": 1022
    },
    {
        "Text": "That guy annoys me",
        "Match": "FALSE",
        "Cnt": 1023
    },
    {
        "Text": "The batter was out",
        "Match": "FALSE",
        "Cnt": 1024
    },
    {
        "Text": "The crow flew away",
        "Match": "FALSE",
        "Cnt": 1025
    },
    {
        "Text": "The power went out",
        "Match": "FALSE",
        "Cnt": 1026
    },
    {
        "Text": "These dogs are big",
        "Match": "FALSE",
        "Cnt": 1027
    },
    {
        "Text": "This is Mary's dog",
        "Match": "FALSE",
        "Cnt": 1028
    },
    {
        "Text": "Was his story true?",
        "Match": "FALSE",
        "Cnt": 1029
    },
    {
        "Text": "We are against war",
        "Match": "FALSE",
        "Cnt": 1030
    },
    {
        "Text": "We are against war",
        "Match": "FALSE",
        "Cnt": 1031
    },
    {
        "Text": "We enjoyed skating",
        "Match": "FALSE",
        "Cnt": 1032
    },
    {
        "Text": "We were in a hurry",
        "Match": "FALSE",
        "Cnt": 1033
    },
    {
        "Text": "We were very tired",
        "Match": "FALSE",
        "Cnt": 1034
    },
    {
        "Text": "We're good friends",
        "Match": "FALSE",
        "Cnt": 1035
    },
    {
        "Text": "What a big pumpkin!",
        "Match": "FALSE",
        "Cnt": 1036
    },
    {
        "Text": "What's the problem?",
        "Match": "FALSE",
        "Cnt": 1037
    },
    {
        "Text": "When does it begin?",
        "Match": "FALSE",
        "Cnt": 1038
    },
    {
        "Text": "Where are the kids?",
        "Match": "FALSE",
        "Cnt": 1039
    },
    {
        "Text": "Where is the beach?",
        "Match": "FALSE",
        "Cnt": 1040
    },
    {
        "Text": "Which dog is yours?",
        "Match": "FALSE",
        "Cnt": 1041
    },
    {
        "Text": "Who broke the vase?",
        "Match": "FALSE",
        "Cnt": 1042
    },
    {
        "Text": "Who made this cake?",
        "Match": "FALSE",
        "Cnt": 1043
    },
    {
        "Text": "Who's at the wheel?",
        "Match": "FALSE",
        "Cnt": 1044
    },
    {
        "Text": "Whose book is this?",
        "Match": "FALSE",
        "Cnt": 1045
    },
    {
        "Text": "You may use my pen",
        "Match": "FALSE",
        "Cnt": 1046
    },
    {
        "Text": "Answer my questions",
        "Match": "FALSE",
        "Cnt": 1047
    },
    {
        "Text": "Are they in the gym?",
        "Match": "FALSE",
        "Cnt": 1048
    },
    {
        "Text": "Can you drive a car?",
        "Match": "FALSE",
        "Cnt": 1049
    },
    {
        "Text": "Can you drive a car?",
        "Match": "FALSE",
        "Cnt": 1050
    },
    {
        "Text": "Could you sign here?",
        "Match": "FALSE",
        "Cnt": 1051
    },
    {
        "Text": "Everybody likes her",
        "Match": "FALSE",
        "Cnt": 1052
    },
    {
        "Text": "Everybody likes him",
        "Match": "FALSE",
        "Cnt": 1053
    },
    {
        "Text": "Excuse me, I'm lost",
        "Match": "FALSE",
        "Cnt": 1054
    },
    {
        "Text": "He called me a taxi",
        "Match": "FALSE",
        "Cnt": 1055
    },
    {
        "Text": "He felt very lonely",
        "Match": "FALSE",
        "Cnt": 1056
    },
    {
        "Text": "He lives next to me",
        "Match": "FALSE",
        "Cnt": 1057
    },
    {
        "Text": "He looks very tired",
        "Match": "FALSE",
        "Cnt": 1058
    },
    {
        "Text": "He seems to be rich",
        "Match": "FALSE",
        "Cnt": 1059
    },
    {
        "Text": "He'll get well soon",
        "Match": "FALSE",
        "Cnt": 1060
    },
    {
        "Text": "He's in a bad state",
        "Match": "FALSE",
        "Cnt": 1061
    },
    {
        "Text": "How about the taste?",
        "Match": "FALSE",
        "Cnt": 1062
    },
    {
        "Text": "How did you make it?",
        "Match": "FALSE",
        "Cnt": 1063
    },
    {
        "Text": "I am not from India",
        "Match": "FALSE",
        "Cnt": 1064
    },
    {
        "Text": "I bought an old car",
        "Match": "FALSE",
        "Cnt": 1065
    },
    {
        "Text": "I can teach English",
        "Match": "FALSE",
        "Cnt": 1066
    },
    {
        "Text": "I continued singing",
        "Match": "FALSE",
        "Cnt": 1067
    },
    {
        "Text": "I do not understand",
        "Match": "FALSE",
        "Cnt": 1068
    },
    {
        "Text": "I don't like summer",
        "Match": "FALSE",
        "Cnt": 1069
    },
    {
        "Text": "I forgot to ask him",
        "Match": "FALSE",
        "Cnt": 1070
    },
    {
        "Text": "I hate taking risks",
        "Match": "FALSE",
        "Cnt": 1071
    },
    {
        "Text": "I haven't eaten yet",
        "Match": "FALSE",
        "Cnt": 1072
    },
    {
        "Text": "I know both of them",
        "Match": "FALSE",
        "Cnt": 1073
    },
    {
        "Text": "I know what that is",
        "Match": "FALSE",
        "Cnt": 1074
    },
    {
        "Text": "I tried to tell you",
        "Match": "FALSE",
        "Cnt": 1075
    },
    {
        "Text": "I want to marry her",
        "Match": "FALSE",
        "Cnt": 1076
    },
    {
        "Text": "I wanted her to win",
        "Match": "FALSE",
        "Cnt": 1077
    },
    {
        "Text": "I'd like a city map",
        "Match": "FALSE",
        "Cnt": 1078
    },
    {
        "Text": "I'd like to see her",
        "Match": "FALSE",
        "Cnt": 1079
    },
    {
        "Text": "I'd like to see her",
        "Match": "FALSE",
        "Cnt": 1080
    },
    {
        "Text": "I'll be back at ten",
        "Match": "FALSE",
        "Cnt": 1081
    },
    {
        "Text": "I'll bring the wine",
        "Match": "FALSE",
        "Cnt": 1082
    },
    {
        "Text": "I'll bring the wine",
        "Match": "FALSE",
        "Cnt": 1083
    },
    {
        "Text": "I'll make you happy",
        "Match": "FALSE",
        "Cnt": 1084
    },
    {
        "Text": "I've already called",
        "Match": "FALSE",
        "Cnt": 1085
    },
    {
        "Text": "I've lost my ticket",
        "Match": "FALSE",
        "Cnt": 1086
    },
    {
        "Text": "Let's play baseball!",
        "Match": "FALSE",
        "Cnt": 1087
    },
    {
        "Text": "Must I write in ink?",
        "Match": "FALSE",
        "Cnt": 1088
    },
    {
        "Text": "My family loved Tom",
        "Match": "FALSE",
        "Cnt": 1089
    },
    {
        "Text": "My money was stolen",
        "Match": "FALSE",
        "Cnt": 1090
    },
    {
        "Text": "My sister has a job",
        "Match": "FALSE",
        "Cnt": 1091
    },
    {
        "Text": "She kept on working",
        "Match": "FALSE",
        "Cnt": 1092
    },
    {
        "Text": "She pulled my shirt",
        "Match": "FALSE",
        "Cnt": 1093
    },
    {
        "Text": "That is not a tiger",
        "Match": "FALSE",
        "Cnt": 1094
    },
    {
        "Text": "That was my mistake",
        "Match": "FALSE",
        "Cnt": 1095
    },
    {
        "Text": "The skies are clear",
        "Match": "FALSE",
        "Cnt": 1096
    },
    {
        "Text": "The trees are green",
        "Match": "FALSE",
        "Cnt": 1097
    },
    {
        "Text": "These are our books",
        "Match": "FALSE",
        "Cnt": 1098
    },
    {
        "Text": "This is what I need",
        "Match": "FALSE",
        "Cnt": 1099
    },
    {
        "Text": "Watch your language",
        "Match": "FALSE",
        "Cnt": 1100
    },
    {
        "Text": "We are good friends",
        "Match": "FALSE",
        "Cnt": 1101
    },
    {
        "Text": "We must pay the tax",
        "Match": "FALSE",
        "Cnt": 1102
    },
    {
        "Text": "What did you answer?",
        "Match": "FALSE",
        "Cnt": 1103
    },
    {
        "Text": "What is in this box?",
        "Match": "FALSE",
        "Cnt": 1104
    },
    {
        "Text": "What were you doing?",
        "Match": "FALSE",
        "Cnt": 1105
    },
    {
        "Text": "Where are you going?",
        "Match": "FALSE",
        "Cnt": 1106
    },
    {
        "Text": "Where are you going?",
        "Match": "FALSE",
        "Cnt": 1107
    },
    {
        "Text": "Where's the airport?",
        "Match": "FALSE",
        "Cnt": 1108
    },
    {
        "Text": "Which book is yours?",
        "Match": "FALSE",
        "Cnt": 1109
    },
    {
        "Text": "Who is your teacher?",
        "Match": "FALSE",
        "Cnt": 1110
    },
    {
        "Text": "Why didn't you come?",
        "Match": "FALSE",
        "Cnt": 1111
    },
    {
        "Text": "Will you go with us?",
        "Match": "FALSE",
        "Cnt": 1112
    },
    {
        "Text": "Winter is coming on",
        "Match": "FALSE",
        "Cnt": 1113
    },
    {
        "Text": "You are at it again",
        "Match": "FALSE",
        "Cnt": 1114
    },
    {
        "Text": "You may rely on him",
        "Match": "FALSE",
        "Cnt": 1115
    },
    {
        "Text": "You must forgive me",
        "Match": "FALSE",
        "Cnt": 1116
    },
    {
        "Text": "You must forgive me",
        "Match": "FALSE",
        "Cnt": 1117
    },
    {
        "Text": "You must study hard",
        "Match": "FALSE",
        "Cnt": 1118
    },
    {
        "Text": "You're a life saver",
        "Match": "FALSE",
        "Cnt": 1119
    },
    {
        "Text": "Didn't I tell you so?",
        "Match": "FALSE",
        "Cnt": 1120
    },
    {
        "Text": "Do you have a pencil?",
        "Match": "FALSE",
        "Cnt": 1121
    },
    {
        "Text": "Do you live in Tokyo?",
        "Match": "FALSE",
        "Cnt": 1122
    },
    {
        "Text": "Do you speak English?",
        "Match": "FALSE",
        "Cnt": 1123
    },
    {
        "Text": "Don't open your book",
        "Match": "FALSE",
        "Cnt": 1124
    },
    {
        "Text": "Don't worry about me",
        "Match": "FALSE",
        "Cnt": 1125
    },
    {
        "Text": "Don't worry about us",
        "Match": "FALSE",
        "Cnt": 1126
    },
    {
        "Text": "Fish live in the sea",
        "Match": "FALSE",
        "Cnt": 1127
    },
    {
        "Text": "Go tell him yourself",
        "Match": "FALSE",
        "Cnt": 1128
    },
    {
        "Text": "Have you been abroad?",
        "Match": "FALSE",
        "Cnt": 1129
    },
    {
        "Text": "He envied my success",
        "Match": "FALSE",
        "Cnt": 1130
    },
    {
        "Text": "He got angry with me",
        "Match": "FALSE",
        "Cnt": 1131
    },
    {
        "Text": "He has been to India",
        "Match": "FALSE",
        "Cnt": 1132
    },
    {
        "Text": "He is angry with you",
        "Match": "FALSE",
        "Cnt": 1133
    },
    {
        "Text": "He is hard to please",
        "Match": "FALSE",
        "Cnt": 1134
    },
    {
        "Text": "He is in poor health",
        "Match": "FALSE",
        "Cnt": 1135
    },
    {
        "Text": "He lent me two books",
        "Match": "FALSE",
        "Cnt": 1136
    },
    {
        "Text": "He made up an excuse",
        "Match": "FALSE",
        "Cnt": 1137
    },
    {
        "Text": "He married for money",
        "Match": "FALSE",
        "Cnt": 1138
    },
    {
        "Text": "He saw a pretty girl",
        "Match": "FALSE",
        "Cnt": 1139
    },
    {
        "Text": "He wanted to succeed",
        "Match": "FALSE",
        "Cnt": 1140
    },
    {
        "Text": "How's your job going?",
        "Match": "FALSE",
        "Cnt": 1141
    },
    {
        "Text": "I agree to this plan",
        "Match": "FALSE",
        "Cnt": 1142
    },
    {
        "Text": "I am a stranger here",
        "Match": "FALSE",
        "Cnt": 1143
    },
    {
        "Text": "I am counting on you",
        "Match": "FALSE",
        "Cnt": 1144
    },
    {
        "Text": "I am eating an apple",
        "Match": "FALSE",
        "Cnt": 1145
    },
    {
        "Text": "I am eating an apple",
        "Match": "FALSE",
        "Cnt": 1146
    },
    {
        "Text": "I don't mind waiting",
        "Match": "FALSE",
        "Cnt": 1147
    },
    {
        "Text": "I expect him to come",
        "Match": "FALSE",
        "Cnt": 1148
    },
    {
        "Text": "I feel like vomiting",
        "Match": "FALSE",
        "Cnt": 1149
    },
    {
        "Text": "I have a few friends",
        "Match": "FALSE",
        "Cnt": 1150
    },
    {
        "Text": "I have a stomachache",
        "Match": "FALSE",
        "Cnt": 1151
    },
    {
        "Text": "I have back problems",
        "Match": "FALSE",
        "Cnt": 1152
    },
    {
        "Text": "I have been to Kyoto",
        "Match": "FALSE",
        "Cnt": 1153
    },
    {
        "Text": "I have caught a cold",
        "Match": "FALSE",
        "Cnt": 1154
    },
    {
        "Text": "I just cut my finger",
        "Match": "FALSE",
        "Cnt": 1155
    },
    {
        "Text": "I know why he did it",
        "Match": "FALSE",
        "Cnt": 1156
    },
    {
        "Text": "I live in a big city",
        "Match": "FALSE",
        "Cnt": 1157
    },
    {
        "Text": "I lost consciousness",
        "Match": "FALSE",
        "Cnt": 1158
    },
    {
        "Text": "I lost consciousness",
        "Match": "FALSE",
        "Cnt": 1159
    },
    {
        "Text": "I meant it as a joke",
        "Match": "FALSE",
        "Cnt": 1160
    },
    {
        "Text": "I meant it as a joke",
        "Match": "FALSE",
        "Cnt": 1161
    },
    {
        "Text": "I met Mary yesterday",
        "Match": "FALSE",
        "Cnt": 1162
    },
    {
        "Text": "I think you're right",
        "Match": "FALSE",
        "Cnt": 1163
    },
    {
        "Text": "I want my money back",
        "Match": "FALSE",
        "Cnt": 1164
    },
    {
        "Text": "I will come with you",
        "Match": "FALSE",
        "Cnt": 1165
    },
    {
        "Text": "I'll admit I'm wrong",
        "Match": "FALSE",
        "Cnt": 1166
    },
    {
        "Text": "I'll never come back",
        "Match": "FALSE",
        "Cnt": 1167
    },
    {
        "Text": "I'm allergic to fish",
        "Match": "FALSE",
        "Cnt": 1168
    },
    {
        "Text": "I've lost my glasses",
        "Match": "FALSE",
        "Cnt": 1169
    },
    {
        "Text": "I've lost my glasses",
        "Match": "FALSE",
        "Cnt": 1170
    },
    {
        "Text": "I've made a decision",
        "Match": "FALSE",
        "Cnt": 1171
    },
    {
        "Text": "Is he reading a book?",
        "Match": "FALSE",
        "Cnt": 1172
    },
    {
        "Text": "Is it open on Sunday?",
        "Match": "FALSE",
        "Cnt": 1173
    },
    {
        "Text": "Is the phone ringing?",
        "Match": "FALSE",
        "Cnt": 1174
    },
    {
        "Text": "It is already eleven",
        "Match": "FALSE",
        "Cnt": 1175
    },
    {
        "Text": "It is free of charge",
        "Match": "FALSE",
        "Cnt": 1176
    },
    {
        "Text": "It's an easy victory",
        "Match": "FALSE",
        "Cnt": 1177
    },
    {
        "Text": "Let me take you home",
        "Match": "FALSE",
        "Cnt": 1178
    },
    {
        "Text": "Lincoln died in 1865",
        "Match": "FALSE",
        "Cnt": 1179
    },
    {
        "Text": "Please do it quickly",
        "Match": "FALSE",
        "Cnt": 1180
    },
    {
        "Text": "Please shut the door",
        "Match": "FALSE",
        "Cnt": 1181
    },
    {
        "Text": "She gave him a watch",
        "Match": "FALSE",
        "Cnt": 1182
    },
    {
        "Text": "She wore a red dress",
        "Match": "FALSE",
        "Cnt": 1183
    },
    {
        "Text": "She wore a red dress",
        "Match": "FALSE",
        "Cnt": 1184
    },
    {
        "Text": "That's his specialty",
        "Match": "FALSE",
        "Cnt": 1185
    },
    {
        "Text": "The house is haunted",
        "Match": "FALSE",
        "Cnt": 1186
    },
    {
        "Text": "The house was ablaze",
        "Match": "FALSE",
        "Cnt": 1187
    },
    {
        "Text": "The man looked at me",
        "Match": "FALSE",
        "Cnt": 1188
    },
    {
        "Text": "The sheets feel damp",
        "Match": "FALSE",
        "Cnt": 1189
    },
    {
        "Text": "The water pipe burst",
        "Match": "FALSE",
        "Cnt": 1190
    },
    {
        "Text": "These books are mine",
        "Match": "FALSE",
        "Cnt": 1191
    },
    {
        "Text": "These shoes are hers",
        "Match": "FALSE",
        "Cnt": 1192
    },
    {
        "Text": "They went to the zoo",
        "Match": "FALSE",
        "Cnt": 1193
    },
    {
        "Text": "This feels like silk",
        "Match": "FALSE",
        "Cnt": 1194
    },
    {
        "Text": "This watch is broken",
        "Match": "FALSE",
        "Cnt": 1195
    },
    {
        "Text": "Time goes by quickly",
        "Match": "FALSE",
        "Cnt": 1196
    },
    {
        "Text": "Wash your hands well",
        "Match": "FALSE",
        "Cnt": 1197
    },
    {
        "Text": "What day is it today?",
        "Match": "FALSE",
        "Cnt": 1198
    },
    {
        "Text": "What did Galileo see?",
        "Match": "FALSE",
        "Cnt": 1199
    },
    {
        "Text": "What did Galileo see?",
        "Match": "FALSE",
        "Cnt": 1200
    },
    {
        "Text": "What does it contain?",
        "Match": "FALSE",
        "Cnt": 1201
    },
    {
        "Text": "When did you see her?",
        "Match": "FALSE",
        "Cnt": 1202
    },
    {
        "Text": "When will you return?",
        "Match": "FALSE",
        "Cnt": 1203
    },
    {
        "Text": "Where is the problem?",
        "Match": "FALSE",
        "Cnt": 1204
    },
    {
        "Text": "Where is the problem?",
        "Match": "FALSE",
        "Cnt": 1205
    },
    {
        "Text": "Where is your father?",
        "Match": "FALSE",
        "Cnt": 1206
    },
    {
        "Text": "Will you go by train?",
        "Match": "FALSE",
        "Cnt": 1207
    },
    {
        "Text": "You can't prove that",
        "Match": "FALSE",
        "Cnt": 1208
    },
    {
        "Text": "You look happy today",
        "Match": "FALSE",
        "Cnt": 1209
    },
    {
        "Text": "Your dog is very big",
        "Match": "FALSE",
        "Cnt": 1210
    },
    {
        "Text": "Your dog is very fat",
        "Match": "FALSE",
        "Cnt": 1211
    },
    {
        "Text": "Can I use your pencil?",
        "Match": "FALSE",
        "Cnt": 1212
    },
    {
        "Text": "Can the rumor be true?",
        "Match": "FALSE",
        "Cnt": 1213
    },
    {
        "Text": "Can you keep a secret?",
        "Match": "FALSE",
        "Cnt": 1214
    },
    {
        "Text": "Did you see my camera?",
        "Match": "FALSE",
        "Cnt": 1215
    },
    {
        "Text": "Do you believe in God?",
        "Match": "FALSE",
        "Cnt": 1216
    },
    {
        "Text": "Do you know your size?",
        "Match": "FALSE",
        "Cnt": 1217
    },
    {
        "Text": "Do you like this book?",
        "Match": "FALSE",
        "Cnt": 1218
    },
    {
        "Text": "Does he speak English?",
        "Match": "FALSE",
        "Cnt": 1219
    },
    {
        "Text": "Don't be disappointed",
        "Match": "FALSE",
        "Cnt": 1220
    },
    {
        "Text": "Fat hens lay few eggs",
        "Match": "FALSE",
        "Cnt": 1221
    },
    {
        "Text": "Has the bell rung yet?",
        "Match": "FALSE",
        "Cnt": 1222
    },
    {
        "Text": "He accepted our offer",
        "Match": "FALSE",
        "Cnt": 1223
    },
    {
        "Text": "He became a policeman",
        "Match": "FALSE",
        "Cnt": 1224
    },
    {
        "Text": "He became a policeman",
        "Match": "FALSE",
        "Cnt": 1225
    },
    {
        "Text": "He climbed the stairs",
        "Match": "FALSE",
        "Cnt": 1226
    },
    {
        "Text": "He deals in furniture",
        "Match": "FALSE",
        "Cnt": 1227
    },
    {
        "Text": "He got a lot of money",
        "Match": "FALSE",
        "Cnt": 1228
    },
    {
        "Text": "He has a little money",
        "Match": "FALSE",
        "Cnt": 1229
    },
    {
        "Text": "He has a lot of money",
        "Match": "FALSE",
        "Cnt": 1230
    },
    {
        "Text": "He is a sharp-shooter",
        "Match": "FALSE",
        "Cnt": 1231
    },
    {
        "Text": "He is poor, but happy",
        "Match": "FALSE",
        "Cnt": 1232
    },
    {
        "Text": "He is tall and strong",
        "Match": "FALSE",
        "Cnt": 1233
    },
    {
        "Text": "He knows us very well",
        "Match": "FALSE",
        "Cnt": 1234
    },
    {
        "Text": "He looks like a horse",
        "Match": "FALSE",
        "Cnt": 1235
    },
    {
        "Text": "He must be over sixty",
        "Match": "FALSE",
        "Cnt": 1236
    },
    {
        "Text": "He sang while working",
        "Match": "FALSE",
        "Cnt": 1237
    },
    {
        "Text": "He was my dear friend",
        "Match": "FALSE",
        "Cnt": 1238
    },
    {
        "Text": "He was sick last week",
        "Match": "FALSE",
        "Cnt": 1239
    },
    {
        "Text": "He won the race again",
        "Match": "FALSE",
        "Cnt": 1240
    },
    {
        "Text": "He writes beautifully",
        "Match": "FALSE",
        "Cnt": 1241
    },
    {
        "Text": "How do you feel today?",
        "Match": "FALSE",
        "Cnt": 1242
    },
    {
        "Text": "I am grateful to them",
        "Match": "FALSE",
        "Cnt": 1243
    },
    {
        "Text": "I am poor at swimming",
        "Match": "FALSE",
        "Cnt": 1244
    },
    {
        "Text": "I am tired of my work",
        "Match": "FALSE",
        "Cnt": 1245
    },
    {
        "Text": "I can't let you leave",
        "Match": "FALSE",
        "Cnt": 1246
    },
    {
        "Text": "I dove into the river",
        "Match": "FALSE",
        "Cnt": 1247
    },
    {
        "Text": "I have made him angry",
        "Match": "FALSE",
        "Cnt": 1248
    },
    {
        "Text": "I live in Boston, too",
        "Match": "FALSE",
        "Cnt": 1249
    },
    {
        "Text": "I made him my servant",
        "Match": "FALSE",
        "Cnt": 1250
    },
    {
        "Text": "I never liked biology",
        "Match": "FALSE",
        "Cnt": 1251
    },
    {
        "Text": "I ran away in a hurry",
        "Match": "FALSE",
        "Cnt": 1252
    },
    {
        "Text": "I want to visit Korea",
        "Match": "FALSE",
        "Cnt": 1253
    },
    {
        "Text": "I'm too tired to walk",
        "Match": "FALSE",
        "Cnt": 1254
    },
    {
        "Text": "I've made my decision",
        "Match": "FALSE",
        "Cnt": 1255
    },
    {
        "Text": "Is Mary your daughter?",
        "Match": "FALSE",
        "Cnt": 1256
    },
    {
        "Text": "Is your watch correct?",
        "Match": "FALSE",
        "Cnt": 1257
    },
    {
        "Text": "It will snow tomorrow",
        "Match": "FALSE",
        "Cnt": 1258
    },
    {
        "Text": "Let's start the party",
        "Match": "FALSE",
        "Cnt": 1259
    },
    {
        "Text": "Make yourself at home",
        "Match": "FALSE",
        "Cnt": 1260
    },
    {
        "Text": "May comes after April",
        "Match": "FALSE",
        "Cnt": 1261
    },
    {
        "Text": "My car is not running",
        "Match": "FALSE",
        "Cnt": 1262
    },
    {
        "Text": "My eye has swollen up",
        "Match": "FALSE",
        "Cnt": 1263
    },
    {
        "Text": "Not all birds can fly",
        "Match": "FALSE",
        "Cnt": 1264
    },
    {
        "Text": "Please close the door",
        "Match": "FALSE",
        "Cnt": 1265
    },
    {
        "Text": "Please leave me alone",
        "Match": "FALSE",
        "Cnt": 1266
    },
    {
        "Text": "Please throw the ball",
        "Match": "FALSE",
        "Cnt": 1267
    },
    {
        "Text": "Put it where you like",
        "Match": "FALSE",
        "Cnt": 1268
    },
    {
        "Text": "Put it where you like",
        "Match": "FALSE",
        "Cnt": 1269
    },
    {
        "Text": "Put it where you like",
        "Match": "FALSE",
        "Cnt": 1270
    },
    {
        "Text": "She always works hard",
        "Match": "FALSE",
        "Cnt": 1271
    },
    {
        "Text": "She asked me for help",
        "Match": "FALSE",
        "Cnt": 1272
    },
    {
        "Text": "She got me a tiny toy",
        "Match": "FALSE",
        "Cnt": 1273
    },
    {
        "Text": "She hated her husband",
        "Match": "FALSE",
        "Cnt": 1274
    },
    {
        "Text": "She is five years old",
        "Match": "FALSE",
        "Cnt": 1275
    },
    {
        "Text": "She lived a long life",
        "Match": "FALSE",
        "Cnt": 1276
    },
    {
        "Text": "She's a stubborn girl",
        "Match": "FALSE",
        "Cnt": 1277
    },
    {
        "Text": "Sit wherever you like",
        "Match": "FALSE",
        "Cnt": 1278
    },
    {
        "Text": "Tell me what happened",
        "Match": "FALSE",
        "Cnt": 1279
    },
    {
        "Text": "The lake is deep here",
        "Match": "FALSE",
        "Cnt": 1280
    },
    {
        "Text": "The man lost all hope",
        "Match": "FALSE",
        "Cnt": 1281
    },
    {
        "Text": "The station is nearby",
        "Match": "FALSE",
        "Cnt": 1282
    },
    {
        "Text": "They hated each other",
        "Match": "FALSE",
        "Cnt": 1283
    },
    {
        "Text": "They made fun of Mary",
        "Match": "FALSE",
        "Cnt": 1284
    },
    {
        "Text": "They missed the train",
        "Match": "FALSE",
        "Cnt": 1285
    },
    {
        "Text": "They shouted for help",
        "Match": "FALSE",
        "Cnt": 1286
    },
    {
        "Text": "They shouted for help",
        "Match": "FALSE",
        "Cnt": 1287
    },
    {
        "Text": "This is an apple, too",
        "Match": "FALSE",
        "Cnt": 1288
    },
    {
        "Text": "Tom and I are friends",
        "Match": "FALSE",
        "Cnt": 1289
    },
    {
        "Text": "We accepted his offer",
        "Match": "FALSE",
        "Cnt": 1290
    },
    {
        "Text": "We are disturbing him",
        "Match": "FALSE",
        "Cnt": 1291
    },
    {
        "Text": "We rested for a while",
        "Match": "FALSE",
        "Cnt": 1292
    },
    {
        "Text": "Well, I must be going",
        "Match": "FALSE",
        "Cnt": 1293
    },
    {
        "Text": "What is this nonsense?",
        "Match": "FALSE",
        "Cnt": 1294
    },
    {
        "Text": "What're you two doing?",
        "Match": "FALSE",
        "Cnt": 1295
    },
    {
        "Text": "What're you two doing?",
        "Match": "FALSE",
        "Cnt": 1296
    },
    {
        "Text": "Where is the elevator?",
        "Match": "FALSE",
        "Cnt": 1297
    },
    {
        "Text": "Whose books are these?",
        "Match": "FALSE",
        "Cnt": 1298
    },
    {
        "Text": "Will he come tomorrow?",
        "Match": "FALSE",
        "Cnt": 1299
    },
    {
        "Text": "Will he come tomorrow?",
        "Match": "FALSE",
        "Cnt": 1300
    },
    {
        "Text": "You didn't understand",
        "Match": "FALSE",
        "Cnt": 1301
    },
    {
        "Text": "You reap what you sow",
        "Match": "FALSE",
        "Cnt": 1302
    },
    {
        "Text": "You reap what you sow",
        "Match": "FALSE",
        "Cnt": 1303
    },
    {
        "Text": "You reap what you sow",
        "Match": "FALSE",
        "Cnt": 1304
    },
    {
        "Text": "You reap what you sow",
        "Match": "FALSE",
        "Cnt": 1305
    },
    {
        "Text": "You reap what you sow",
        "Match": "FALSE",
        "Cnt": 1306
    },
    {
        "Text": "Your hair is too long",
        "Match": "FALSE",
        "Cnt": 1307
    },
    {
        "Text": "Who is it?\" \"It's me.",
        "Match": "FALSE",
        "Cnt": 1308
    },
    {
        "Text": "A fox is a wild animal",
        "Match": "FALSE",
        "Cnt": 1309
    },
    {
        "Text": "A rabbit has long ears",
        "Match": "FALSE",
        "Cnt": 1310
    },
    {
        "Text": "Can anyone believe you?",
        "Match": "FALSE",
        "Cnt": 1311
    },
    {
        "Text": "Did you read it at all?",
        "Match": "FALSE",
        "Cnt": 1312
    },
    {
        "Text": "Do you like this color?",
        "Match": "FALSE",
        "Cnt": 1313
    },
    {
        "Text": "Don't ask me for money",
        "Match": "FALSE",
        "Cnt": 1314
    },
    {
        "Text": "Don't lose your temper",
        "Match": "FALSE",
        "Cnt": 1315
    },
    {
        "Text": "Don't make fun of them",
        "Match": "FALSE",
        "Cnt": 1316
    },
    {
        "Text": "Don't make me slap you",
        "Match": "FALSE",
        "Cnt": 1317
    },
    {
        "Text": "Don't say such a thing",
        "Match": "FALSE",
        "Cnt": 1318
    },
    {
        "Text": "Don't start doing that",
        "Match": "FALSE",
        "Cnt": 1319
    },
    {
        "Text": "Everyone knew the song",
        "Match": "FALSE",
        "Cnt": 1320
    },
    {
        "Text": "Fish live in the water",
        "Match": "FALSE",
        "Cnt": 1321
    },
    {
        "Text": "He can't run very fast",
        "Match": "FALSE",
        "Cnt": 1322
    },
    {
        "Text": "He earns a good salary",
        "Match": "FALSE",
        "Cnt": 1323
    },
    {
        "Text": "He has three daughters",
        "Match": "FALSE",
        "Cnt": 1324
    },
    {
        "Text": "He knocked at the door",
        "Match": "FALSE",
        "Cnt": 1325
    },
    {
        "Text": "He learned how to swim",
        "Match": "FALSE",
        "Cnt": 1326
    },
    {
        "Text": "He robbed me of my bag",
        "Match": "FALSE",
        "Cnt": 1327
    },
    {
        "Text": "He told me where to go",
        "Match": "FALSE",
        "Cnt": 1328
    },
    {
        "Text": "He tore the book apart",
        "Match": "FALSE",
        "Cnt": 1329
    },
    {
        "Text": "He understands physics",
        "Match": "FALSE",
        "Cnt": 1330
    },
    {
        "Text": "He will soon come back",
        "Match": "FALSE",
        "Cnt": 1331
    },
    {
        "Text": "He will soon come back",
        "Match": "FALSE",
        "Cnt": 1332
    },
    {
        "Text": "He will soon come back",
        "Match": "FALSE",
        "Cnt": 1333
    },
    {
        "Text": "Her father is Japanese",
        "Match": "FALSE",
        "Cnt": 1334
    },
    {
        "Text": "I asked him to do that",
        "Match": "FALSE",
        "Cnt": 1335
    },
    {
        "Text": "I don't agree with you",
        "Match": "FALSE",
        "Cnt": 1336
    },
    {
        "Text": "I don't believe in God",
        "Match": "FALSE",
        "Cnt": 1337
    },
    {
        "Text": "I don't want your pity",
        "Match": "FALSE",
        "Cnt": 1338
    },
    {
        "Text": "I found the cage empty",
        "Match": "FALSE",
        "Cnt": 1339
    },
    {
        "Text": "I go to school on foot",
        "Match": "FALSE",
        "Cnt": 1340
    },
    {
        "Text": "I made the woman angry",
        "Match": "FALSE",
        "Cnt": 1341
    },
    {
        "Text": "I prefer coffee to tea",
        "Match": "FALSE",
        "Cnt": 1342
    },
    {
        "Text": "I seem to have a fever",
        "Match": "FALSE",
        "Cnt": 1343
    },
    {
        "Text": "I still don't know yet",
        "Match": "FALSE",
        "Cnt": 1344
    },
    {
        "Text": "I wake up at 7 o'clock",
        "Match": "FALSE",
        "Cnt": 1345
    },
    {
        "Text": "I want to do it myself",
        "Match": "FALSE",
        "Cnt": 1346
    },
    {
        "Text": "I wasn't fired",
        "Match": "FALSE",
        "Cnt": 1347
    },
    {
        "Text": "I will be back by nine",
        "Match": "FALSE",
        "Cnt": 1348
    },
    {
        "Text": "I wonder what happened",
        "Match": "FALSE",
        "Cnt": 1349
    },
    {
        "Text": "I'd like a Bloody Mary",
        "Match": "FALSE",
        "Cnt": 1350
    },
    {
        "Text": "I'll make a phone call",
        "Match": "FALSE",
        "Cnt": 1351
    },
    {
        "Text": "I'm at the airport now",
        "Match": "FALSE",
        "Cnt": 1352
    },
    {
        "Text": "I'm longing to see him",
        "Match": "FALSE",
        "Cnt": 1353
    },
    {
        "Text": "I'm thinking about you",
        "Match": "FALSE",
        "Cnt": 1354
    },
    {
        "Text": "Is anyone absent today?",
        "Match": "FALSE",
        "Cnt": 1355
    },
    {
        "Text": "Is anyone absent today?",
        "Match": "FALSE",
        "Cnt": 1356
    },
    {
        "Text": "It is difficult for me",
        "Match": "FALSE",
        "Cnt": 1357
    },
    {
        "Text": "It's rather cold today",
        "Match": "FALSE",
        "Cnt": 1358
    },
    {
        "Text": "John lives in New York",
        "Match": "FALSE",
        "Cnt": 1359
    },
    {
        "Text": "Mind your own business!",
        "Match": "FALSE",
        "Cnt": 1360
    },
    {
        "Text": "My father is very nice",
        "Match": "FALSE",
        "Cnt": 1361
    },
    {
        "Text": "My father is very nice",
        "Match": "FALSE",
        "Cnt": 1362
    },
    {
        "Text": "My stomach is growling",
        "Match": "FALSE",
        "Cnt": 1363
    },
    {
        "Text": "New York is a big city",
        "Match": "FALSE",
        "Cnt": 1364
    },
    {
        "Text": "School begins in April",
        "Match": "FALSE",
        "Cnt": 1365
    },
    {
        "Text": "School is over at 3:30",
        "Match": "FALSE",
        "Cnt": 1366
    },
    {
        "Text": "Shall I clean the room?",
        "Match": "FALSE",
        "Cnt": 1367
    },
    {
        "Text": "She always wears black",
        "Match": "FALSE",
        "Cnt": 1368
    },
    {
        "Text": "She can play the piano",
        "Match": "FALSE",
        "Cnt": 1369
    },
    {
        "Text": "She has a gentle heart",
        "Match": "FALSE",
        "Cnt": 1370
    },
    {
        "Text": "She is a wealthy woman",
        "Match": "FALSE",
        "Cnt": 1371
    },
    {
        "Text": "She is poor, but happy",
        "Match": "FALSE",
        "Cnt": 1372
    },
    {
        "Text": "She married a rich man",
        "Match": "FALSE",
        "Cnt": 1373
    },
    {
        "Text": "She prattles on and on",
        "Match": "FALSE",
        "Cnt": 1374
    },
    {
        "Text": "She showed me her room",
        "Match": "FALSE",
        "Cnt": 1375
    },
    {
        "Text": "Should I clean my room?",
        "Match": "FALSE",
        "Cnt": 1376
    },
    {
        "Text": "That is almost correct",
        "Match": "FALSE",
        "Cnt": 1377
    },
    {
        "Text": "That was cooked in oil",
        "Match": "FALSE",
        "Cnt": 1378
    },
    {
        "Text": "That was cooked in oil",
        "Match": "FALSE",
        "Cnt": 1379
    },
    {
        "Text": "That's a good question",
        "Match": "FALSE",
        "Cnt": 1380
    },
    {
        "Text": "That's weird, isn't it?",
        "Match": "FALSE",
        "Cnt": 1381
    },
    {
        "Text": "The baby ceased crying",
        "Match": "FALSE",
        "Cnt": 1382
    },
    {
        "Text": "The baby ceased crying",
        "Match": "FALSE",
        "Cnt": 1383
    },
    {
        "Text": "The gate was left open",
        "Match": "FALSE",
        "Cnt": 1384
    },
    {
        "Text": "The girl looked around",
        "Match": "FALSE",
        "Cnt": 1385
    },
    {
        "Text": "The knife is not sharp",
        "Match": "FALSE",
        "Cnt": 1386
    },
    {
        "Text": "The light doesn't work",
        "Match": "FALSE",
        "Cnt": 1387
    },
    {
        "Text": "The sooner, the better",
        "Match": "FALSE",
        "Cnt": 1388
    },
    {
        "Text": "They will be very glad",
        "Match": "FALSE",
        "Cnt": 1389
    },
    {
        "Text": "This book is very thin",
        "Match": "FALSE",
        "Cnt": 1390
    },
    {
        "Text": "This lion is very tame",
        "Match": "FALSE",
        "Cnt": 1391
    },
    {
        "Text": "This silk feels smooth",
        "Match": "FALSE",
        "Cnt": 1392
    },
    {
        "Text": "Tom started the engine",
        "Match": "FALSE",
        "Cnt": 1393
    },
    {
        "Text": "We often make mistakes",
        "Match": "FALSE",
        "Cnt": 1394
    },
    {
        "Text": "Were you told to do so?",
        "Match": "FALSE",
        "Cnt": 1395
    },
    {
        "Text": "What do you like to do?",
        "Match": "FALSE",
        "Cnt": 1396
    },
    {
        "Text": "What do you like to do?",
        "Match": "FALSE",
        "Cnt": 1397
    },
    {
        "Text": "What time does it open?",
        "Match": "FALSE",
        "Cnt": 1398
    },
    {
        "Text": "What's the temperature?",
        "Match": "FALSE",
        "Cnt": 1399
    },
    {
        "Text": "Who do you think he is?",
        "Match": "FALSE",
        "Cnt": 1400
    },
    {
        "Text": "Why are you stuttering?",
        "Match": "FALSE",
        "Cnt": 1401
    },
    {
        "Text": "Will we arrive in time?",
        "Match": "FALSE",
        "Cnt": 1402
    },
    {
        "Text": "You had plenty of time",
        "Match": "FALSE",
        "Cnt": 1403
    },
    {
        "Text": "You have a good memory",
        "Match": "FALSE",
        "Cnt": 1404
    },
    {
        "Text": "You've got to stop Tom",
        "Match": "FALSE",
        "Cnt": 1405
    },
    {
        "Text": "Are there enough chairs?",
        "Match": "FALSE",
        "Cnt": 1406
    },
    {
        "Text": "Are you free on Tuesday?",
        "Match": "FALSE",
        "Cnt": 1407
    },
    {
        "Text": "Can I see your passport?",
        "Match": "FALSE",
        "Cnt": 1408
    },
    {
        "Text": "Can you lend me 500 yen?",
        "Match": "FALSE",
        "Cnt": 1409
    },
    {
        "Text": "Can't you speak English?",
        "Match": "FALSE",
        "Cnt": 1410
    },
    {
        "Text": "Do you watch television?",
        "Match": "FALSE",
        "Cnt": 1411
    },
    {
        "Text": "Does milk spoil quickly?",
        "Match": "FALSE",
        "Cnt": 1412
    },
    {
        "Text": "Don't drink any alcohol",
        "Match": "FALSE",
        "Cnt": 1413
    },
    {
        "Text": "Don't forget the ticket",
        "Match": "FALSE",
        "Cnt": 1414
    },
    {
        "Text": "Glass is made from sand",
        "Match": "FALSE",
        "Cnt": 1415
    },
    {
        "Text": "He abandoned his family",
        "Match": "FALSE",
        "Cnt": 1416
    },
    {
        "Text": "He betrayed his country",
        "Match": "FALSE",
        "Cnt": 1417
    },
    {
        "Text": "He catches colds easily",
        "Match": "FALSE",
        "Cnt": 1418
    },
    {
        "Text": "He couldn't get the job",
        "Match": "FALSE",
        "Cnt": 1419
    },
    {
        "Text": "He decided to go abroad",
        "Match": "FALSE",
        "Cnt": 1420
    },
    {
        "Text": "He did not get up early",
        "Match": "FALSE",
        "Cnt": 1421
    },
    {
        "Text": "He got lost in the park",
        "Match": "FALSE",
        "Cnt": 1422
    },
    {
        "Text": "He is smelling the soup",
        "Match": "FALSE",
        "Cnt": 1423
    },
    {
        "Text": "He is used to hard work",
        "Match": "FALSE",
        "Cnt": 1424
    },
    {
        "Text": "He likes playing soccer",
        "Match": "FALSE",
        "Cnt": 1425
    },
    {
        "Text": "He looked up at the sky",
        "Match": "FALSE",
        "Cnt": 1426
    },
    {
        "Text": "He tends to be arrogant",
        "Match": "FALSE",
        "Cnt": 1427
    },
    {
        "Text": "He tends to be arrogant",
        "Match": "FALSE",
        "Cnt": 1428
    },
    {
        "Text": "He tends to be arrogant",
        "Match": "FALSE",
        "Cnt": 1429
    },
    {
        "Text": "He was accused of theft",
        "Match": "FALSE",
        "Cnt": 1430
    },
    {
        "Text": "He was more than a king",
        "Match": "FALSE",
        "Cnt": 1431
    },
    {
        "Text": "Her story can't be true",
        "Match": "FALSE",
        "Cnt": 1432
    },
    {
        "Text": "I do not have much time",
        "Match": "FALSE",
        "Cnt": 1433
    },
    {
        "Text": "I don't have much money",
        "Match": "FALSE",
        "Cnt": 1434
    },
    {
        "Text": "I feel like throwing up",
        "Match": "FALSE",
        "Cnt": 1435
    },
    {
        "Text": "I fell in love with her",
        "Match": "FALSE",
        "Cnt": 1436
    },
    {
        "Text": "I found the glass empty",
        "Match": "FALSE",
        "Cnt": 1437
    },
    {
        "Text": "I have little money now",
        "Match": "FALSE",
        "Cnt": 1438
    },
    {
        "Text": "I have no money with me",
        "Match": "FALSE",
        "Cnt": 1439
    },
    {
        "Text": "I have to see a dentist",
        "Match": "FALSE",
        "Cnt": 1440
    },
    {
        "Text": "I like my job very much",
        "Match": "FALSE",
        "Cnt": 1441
    },
    {
        "Text": "I like studying English",
        "Match": "FALSE",
        "Cnt": 1442
    },
    {
        "Text": "I really like city life",
        "Match": "FALSE",
        "Cnt": 1443
    },
    {
        "Text": "I wish I could help you",
        "Match": "FALSE",
        "Cnt": 1444
    },
    {
        "Text": "I'd rather not meet him",
        "Match": "FALSE",
        "Cnt": 1445
    },
    {
        "Text": "I'd rather not meet him",
        "Match": "FALSE",
        "Cnt": 1446
    },
    {
        "Text": "I'll give you a present",
        "Match": "FALSE",
        "Cnt": 1447
    },
    {
        "Text": "I've quit drinking beer",
        "Match": "FALSE",
        "Cnt": 1448
    },
    {
        "Text": "Is this what you wanted?",
        "Match": "FALSE",
        "Cnt": 1449
    },
    {
        "Text": "It is almost 12 o'clock",
        "Match": "FALSE",
        "Cnt": 1450
    },
    {
        "Text": "It's almost six o'clock",
        "Match": "FALSE",
        "Cnt": 1451
    },
    {
        "Text": "It's no concern of mine",
        "Match": "FALSE",
        "Cnt": 1452
    },
    {
        "Text": "My sister has long legs",
        "Match": "FALSE",
        "Cnt": 1453
    },
    {
        "Text": "Shall I get you a chair?",
        "Match": "FALSE",
        "Cnt": 1454
    },
    {
        "Text": "She bought a dozen eggs",
        "Match": "FALSE",
        "Cnt": 1455
    },
    {
        "Text": "She doesn't speak to me",
        "Match": "FALSE",
        "Cnt": 1456
    },
    {
        "Text": "She is dressed in white",
        "Match": "FALSE",
        "Cnt": 1457
    },
    {
        "Text": "She was late once again",
        "Match": "FALSE",
        "Cnt": 1458
    },
    {
        "Text": "Show me another example",
        "Match": "FALSE",
        "Cnt": 1459
    },
    {
        "Text": "Swimming is easy for me",
        "Match": "FALSE",
        "Cnt": 1460
    },
    {
        "Text": "Take whichever you want",
        "Match": "FALSE",
        "Cnt": 1461
    },
    {
        "Text": "That applies to him too",
        "Match": "FALSE",
        "Cnt": 1462
    },
    {
        "Text": "That man has many debts",
        "Match": "FALSE",
        "Cnt": 1463
    },
    {
        "Text": "The box is made of wood",
        "Match": "FALSE",
        "Cnt": 1464
    },
    {
        "Text": "The bus hasn't come yet",
        "Match": "FALSE",
        "Cnt": 1465
    },
    {
        "Text": "The house was in flames",
        "Match": "FALSE",
        "Cnt": 1466
    },
    {
        "Text": "They adopted the orphan",
        "Match": "FALSE",
        "Cnt": 1467
    },
    {
        "Text": "They stood face to face",
        "Match": "FALSE",
        "Cnt": 1468
    },
    {
        "Text": "They were afraid of you",
        "Match": "FALSE",
        "Cnt": 1469
    },
    {
        "Text": "They were afraid of you",
        "Match": "FALSE",
        "Cnt": 1470
    },
    {
        "Text": "This chair is too small",
        "Match": "FALSE",
        "Cnt": 1471
    },
    {
        "Text": "This is why I came back",
        "Match": "FALSE",
        "Cnt": 1472
    },
    {
        "Text": "This river is beautiful",
        "Match": "FALSE",
        "Cnt": 1473
    },
    {
        "Text": "Tomorrow is my birthday",
        "Match": "FALSE",
        "Cnt": 1474
    },
    {
        "Text": "Turn your face this way",
        "Match": "FALSE",
        "Cnt": 1475
    },
    {
        "Text": "Turn your face this way",
        "Match": "FALSE",
        "Cnt": 1476
    },
    {
        "Text": "Two plus two makes four",
        "Match": "FALSE",
        "Cnt": 1477
    },
    {
        "Text": "We all stood up at once",
        "Match": "FALSE",
        "Cnt": 1478
    },
    {
        "Text": "We bought a round table",
        "Match": "FALSE",
        "Cnt": 1479
    },
    {
        "Text": "We have no school today",
        "Match": "FALSE",
        "Cnt": 1480
    },
    {
        "Text": "We may not win tomorrow",
        "Match": "FALSE",
        "Cnt": 1481
    },
    {
        "Text": "We put sugar in our tea",
        "Match": "FALSE",
        "Cnt": 1482
    },
    {
        "Text": "What do you want it for?",
        "Match": "FALSE",
        "Cnt": 1483
    },
    {
        "Text": "What is his nationality?",
        "Match": "FALSE",
        "Cnt": 1484
    },
    {
        "Text": "When do you play tennis?",
        "Match": "FALSE",
        "Cnt": 1485
    },
    {
        "Text": "When it rains, it pours",
        "Match": "FALSE",
        "Cnt": 1486
    },
    {
        "Text": "Why don't you ever help?",
        "Match": "FALSE",
        "Cnt": 1487
    },
    {
        "Text": "Why don't you ever help?",
        "Match": "FALSE",
        "Cnt": 1488
    },
    {
        "Text": "Will you turn on the TV?",
        "Match": "FALSE",
        "Cnt": 1489
    },
    {
        "Text": "You shouldn't wait here",
        "Match": "FALSE",
        "Cnt": 1490
    },
    {
        "Text": "Are you younger than him?",
        "Match": "FALSE",
        "Cnt": 1491
    },
    {
        "Text": "Bad news travels quickly",
        "Match": "FALSE",
        "Cnt": 1492
    },
    {
        "Text": "Can you keep it a secret?",
        "Match": "FALSE",
        "Cnt": 1493
    },
    {
        "Text": "Cheese is made from milk",
        "Match": "FALSE",
        "Cnt": 1494
    },
    {
        "Text": "Choose between these two",
        "Match": "FALSE",
        "Cnt": 1495
    },
    {
        "Text": "Did he tell you anything?",
        "Match": "FALSE",
        "Cnt": 1496
    },
    {
        "Text": "Did you do your homework?",
        "Match": "FALSE",
        "Cnt": 1497
    },
    {
        "Text": "Did you do your homework?",
        "Match": "FALSE",
        "Cnt": 1498
    },
    {
        "Text": "Do you have a pen on you?",
        "Match": "FALSE",
        "Cnt": 1499
    },
    {
        "Text": "Do you have any brothers?",
        "Match": "FALSE",
        "Cnt": 1500
    },
    {
        "Text": "Do you need an ambulance?",
        "Match": "FALSE",
        "Cnt": 1501
    },
    {
        "Text": "Don't play with that key!",
        "Match": "FALSE",
        "Cnt": 1502
    },
    {
        "Text": "Don't you want to go out?",
        "Match": "FALSE",
        "Cnt": 1503
    },
    {
        "Text": "Every house had a garden",
        "Match": "FALSE",
        "Cnt": 1504
    },
    {
        "Text": "He can't be under thirty",
        "Match": "FALSE",
        "Cnt": 1505
    },
    {
        "Text": "He cut the envelope open",
        "Match": "FALSE",
        "Cnt": 1506
    },
    {
        "Text": "He did not die of cancer",
        "Match": "FALSE",
        "Cnt": 1507
    },
    {
        "Text": "He is very fond of music",
        "Match": "FALSE",
        "Cnt": 1508
    },
    {
        "Text": "He knows a lot of people",
        "Match": "FALSE",
        "Cnt": 1509
    },
    {
        "Text": "He leveled his gun at me",
        "Match": "FALSE",
        "Cnt": 1510
    },
    {
        "Text": "He was accused of murder",
        "Match": "FALSE",
        "Cnt": 1511
    },
    {
        "Text": "He was then a boy of ten",
        "Match": "FALSE",
        "Cnt": 1512
    },
    {
        "Text": "He will not listen to me",
        "Match": "FALSE",
        "Cnt": 1513
    },
    {
        "Text": "He's always dissatisfied",
        "Match": "FALSE",
        "Cnt": 1514
    },
    {
        "Text": "He's reading a novel now",
        "Match": "FALSE",
        "Cnt": 1515
    },
    {
        "Text": "Here, please have a seat",
        "Match": "FALSE",
        "Cnt": 1516
    },
    {
        "Text": "How long have you waited?",
        "Match": "FALSE",
        "Cnt": 1517
    },
    {
        "Text": "How much for half a kilo?",
        "Match": "FALSE",
        "Cnt": 1518
    },
    {
        "Text": "I am able to drive a car",
        "Match": "FALSE",
        "Cnt": 1519
    },
    {
        "Text": "I beg to differ with you",
        "Match": "FALSE",
        "Cnt": 1520
    },
    {
        "Text": "I can't live without you",
        "Match": "FALSE",
        "Cnt": 1521
    },
    {
        "Text": "I can't live without you",
        "Match": "FALSE",
        "Cnt": 1522
    },
    {
        "Text": "I can't stand it anymore",
        "Match": "FALSE",
        "Cnt": 1523
    },
    {
        "Text": "I can't walk any further",
        "Match": "FALSE",
        "Cnt": 1524
    },
    {
        "Text": "I can't walk any further",
        "Match": "FALSE",
        "Cnt": 1525
    },
    {
        "Text": "I don't like this jacket",
        "Match": "FALSE",
        "Cnt": 1526
    },
    {
        "Text": "I felt like running away",
        "Match": "FALSE",
        "Cnt": 1527
    },
    {
        "Text": "I go to school by subway",
        "Match": "FALSE",
        "Cnt": 1528
    },
    {
        "Text": "I got lost in the forest",
        "Match": "FALSE",
        "Cnt": 1529
    },
    {
        "Text": "I had two cups of coffee",
        "Match": "FALSE",
        "Cnt": 1530
    },
    {
        "Text": "I have a heart condition",
        "Match": "FALSE",
        "Cnt": 1531
    },
    {
        "Text": "I have to go to the bank",
        "Match": "FALSE",
        "Cnt": 1532
    },
    {
        "Text": "I heard someone knocking",
        "Match": "FALSE",
        "Cnt": 1533
    },
    {
        "Text": "I like English and music",
        "Match": "FALSE",
        "Cnt": 1534
    },
    {
        "Text": "I like playing the piano",
        "Match": "FALSE",
        "Cnt": 1535
    },
    {
        "Text": "I need coughing medicine",
        "Match": "FALSE",
        "Cnt": 1536
    },
    {
        "Text": "I ran into an old friend",
        "Match": "FALSE",
        "Cnt": 1537
    },
    {
        "Text": "I think that he is right",
        "Match": "FALSE",
        "Cnt": 1538
    },
    {
        "Text": "I was on a trip to India",
        "Match": "FALSE",
        "Cnt": 1539
    },
    {
        "Text": "I was waiting for a taxi",
        "Match": "FALSE",
        "Cnt": 1540
    },
    {
        "Text": "I was waiting for a taxi",
        "Match": "FALSE",
        "Cnt": 1541
    },
    {
        "Text": "I will explain it to her",
        "Match": "FALSE",
        "Cnt": 1542
    },
    {
        "Text": "I will explain it to him",
        "Match": "FALSE",
        "Cnt": 1543
    },
    {
        "Text": "I will have to help them",
        "Match": "FALSE",
        "Cnt": 1544
    },
    {
        "Text": "I will never do it again",
        "Match": "FALSE",
        "Cnt": 1545
    },
    {
        "Text": "I wish you spoke Spanish",
        "Match": "FALSE",
        "Cnt": 1546
    },
    {
        "Text": "I'd like to get a refund",
        "Match": "FALSE",
        "Cnt": 1547
    },
    {
        "Text": "I'll call you back later",
        "Match": "FALSE",
        "Cnt": 1548
    },
    {
        "Text": "I'll call you back later",
        "Match": "FALSE",
        "Cnt": 1549
    },
    {
        "Text": "I'm going to take a bath",
        "Match": "FALSE",
        "Cnt": 1550
    },
    {
        "Text": "I've read the first page",
        "Match": "FALSE",
        "Cnt": 1551
    },
    {
        "Text": "Iron is harder than gold",
        "Match": "FALSE",
        "Cnt": 1552
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1553
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1554
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1555
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1556
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1557
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1558
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1559
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1560
    },
    {
        "Text": "Is your father a teacher?",
        "Match": "FALSE",
        "Cnt": 1561
    },
    {
        "Text": "It is almost ten o'clock",
        "Match": "FALSE",
        "Cnt": 1562
    },
    {
        "Text": "It seems that he is rich",
        "Match": "FALSE",
        "Cnt": 1563
    },
    {
        "Text": "It's not healthy for you",
        "Match": "FALSE",
        "Cnt": 1564
    },
    {
        "Text": "Let me introduce my wife",
        "Match": "FALSE",
        "Cnt": 1565
    },
    {
        "Text": "Let me know your address",
        "Match": "FALSE",
        "Cnt": 1566
    },
    {
        "Text": "My father died of cancer",
        "Match": "FALSE",
        "Cnt": 1567
    },
    {
        "Text": "Please wait five minutes",
        "Match": "FALSE",
        "Cnt": 1568
    },
    {
        "Text": "She is an obstinate girl",
        "Match": "FALSE",
        "Cnt": 1569
    },
    {
        "Text": "She left the baby crying",
        "Match": "FALSE",
        "Cnt": 1570
    },
    {
        "Text": "She refused to notice me",
        "Match": "FALSE",
        "Cnt": 1571
    },
    {
        "Text": "Ten years is a long time",
        "Match": "FALSE",
        "Cnt": 1572
    },
    {
        "Text": "The doctor felt my pulse",
        "Match": "FALSE",
        "Cnt": 1573
    },
    {
        "Text": "The food is getting cold",
        "Match": "FALSE",
        "Cnt": 1574
    },
    {
        "Text": "The food's not ready yet",
        "Match": "FALSE",
        "Cnt": 1575
    },
    {
        "Text": "The man committed murder",
        "Match": "FALSE",
        "Cnt": 1576
    },
    {
        "Text": "The party was successful",
        "Match": "FALSE",
        "Cnt": 1577
    },
    {
        "Text": "These are very old books",
        "Match": "FALSE",
        "Cnt": 1578
    },
    {
        "Text": "They gathered in the gym",
        "Match": "FALSE",
        "Cnt": 1579
    },
    {
        "Text": "This amount includes tax",
        "Match": "FALSE",
        "Cnt": 1580
    },
    {
        "Text": "This house has six rooms",
        "Match": "FALSE",
        "Cnt": 1581
    },
    {
        "Text": "This is as large as that",
        "Match": "FALSE",
        "Cnt": 1582
    },
    {
        "Text": "This road is very narrow",
        "Match": "FALSE",
        "Cnt": 1583
    },
    {
        "Text": "Tokyo is a very big city",
        "Match": "FALSE",
        "Cnt": 1584
    },
    {
        "Text": "Tom is able to swim well",
        "Match": "FALSE",
        "Cnt": 1585
    },
    {
        "Text": "We had no water to drink",
        "Match": "FALSE",
        "Cnt": 1586
    },
    {
        "Text": "We import tea from India",
        "Match": "FALSE",
        "Cnt": 1587
    },
    {
        "Text": "We would die without air",
        "Match": "FALSE",
        "Cnt": 1588
    },
    {
        "Text": "What are you looking for?",
        "Match": "FALSE",
        "Cnt": 1589
    },
    {
        "Text": "What happened last night?",
        "Match": "FALSE",
        "Cnt": 1590
    },
    {
        "Text": "What he lacks is courage",
        "Match": "FALSE",
        "Cnt": 1591
    },
    {
        "Text": "What school do you go to?",
        "Match": "FALSE",
        "Cnt": 1592
    },
    {
        "Text": "What time do you go home?",
        "Match": "FALSE",
        "Cnt": 1593
    },
    {
        "Text": "What time do you go home?",
        "Match": "FALSE",
        "Cnt": 1594
    },
    {
        "Text": "When are you coming back?",
        "Match": "FALSE",
        "Cnt": 1595
    },
    {
        "Text": "When did you get married?",
        "Match": "FALSE",
        "Cnt": 1596
    },
    {
        "Text": "Will you please go there?",
        "Match": "FALSE",
        "Cnt": 1597
    },
    {
        "Text": "Yes, I like it very much",
        "Match": "FALSE",
        "Cnt": 1598
    },
    {
        "Text": "You have to wait in line",
        "Match": "FALSE",
        "Cnt": 1599
    },
    {
        "Text": "You made me lose my mind",
        "Match": "FALSE",
        "Cnt": 1600
    },
    {
        "Text": "A is 5 times as long as B",
        "Match": "FALSE",
        "Cnt": 1601
    },
    {
        "Text": "Apples were on sale today",
        "Match": "FALSE",
        "Cnt": 1602
    },
    {
        "Text": "As for me, I am satisfied",
        "Match": "FALSE",
        "Cnt": 1603
    },
    {
        "Text": "Can you come to the party?",
        "Match": "FALSE",
        "Cnt": 1604
    },
    {
        "Text": "Canada is a large country",
        "Match": "FALSE",
        "Cnt": 1605
    },
    {
        "Text": "Come to my house at eight",
        "Match": "FALSE",
        "Cnt": 1606
    },
    {
        "Text": "Did the police arrest Tom?",
        "Match": "FALSE",
        "Cnt": 1607
    },
    {
        "Text": "Do you believe in fairies?",
        "Match": "FALSE",
        "Cnt": 1608
    },
    {
        "Text": "Do you believe in fairies?",
        "Match": "FALSE",
        "Cnt": 1609
    },
    {
        "Text": "Do you have a larger size?",
        "Match": "FALSE",
        "Cnt": 1610
    },
    {
        "Text": "Do you want to come along?",
        "Match": "FALSE",
        "Cnt": 1611
    },
    {
        "Text": "Don't leave the door open",
        "Match": "FALSE",
        "Cnt": 1612
    },
    {
        "Text": "Have you been here before?",
        "Match": "FALSE",
        "Cnt": 1613
    },
    {
        "Text": "He began to learn English",
        "Match": "FALSE",
        "Cnt": 1614
    },
    {
        "Text": "He came back from America",
        "Match": "FALSE",
        "Cnt": 1615
    },
    {
        "Text": "He couldn't run very fast",
        "Match": "FALSE",
        "Cnt": 1616
    },
    {
        "Text": "He doesn't understand you",
        "Match": "FALSE",
        "Cnt": 1617
    },
    {
        "Text": "He hammered at the window",
        "Match": "FALSE",
        "Cnt": 1618
    },
    {
        "Text": "He has many history books",
        "Match": "FALSE",
        "Cnt": 1619
    },
    {
        "Text": "He hesitated for a moment",
        "Match": "FALSE",
        "Cnt": 1620
    },
    {
        "Text": "He is one of my neighbors",
        "Match": "FALSE",
        "Cnt": 1621
    },
    {
        "Text": "He likes his school a lot",
        "Match": "FALSE",
        "Cnt": 1622
    },
    {
        "Text": "He makes fun of everybody",
        "Match": "FALSE",
        "Cnt": 1623
    },
    {
        "Text": "He often plays the guitar",
        "Match": "FALSE",
        "Cnt": 1624
    },
    {
        "Text": "He taught me how to write",
        "Match": "FALSE",
        "Cnt": 1625
    },
    {
        "Text": "He walked along the river",
        "Match": "FALSE",
        "Cnt": 1626
    },
    {
        "Text": "He wanted to buy the book",
        "Match": "FALSE",
        "Cnt": 1627
    },
    {
        "Text": "He was afraid to go there",
        "Match": "FALSE",
        "Cnt": 1628
    },
    {
        "Text": "He was burning with fever",
        "Match": "FALSE",
        "Cnt": 1629
    },
    {
        "Text": "He was looking at the sky",
        "Match": "FALSE",
        "Cnt": 1630
    },
    {
        "Text": "He was sentenced to death",
        "Match": "FALSE",
        "Cnt": 1631
    },
    {
        "Text": "He witnessed the accident",
        "Match": "FALSE",
        "Cnt": 1632
    },
    {
        "Text": "He witnessed the accident",
        "Match": "FALSE",
        "Cnt": 1633
    },
    {
        "Text": "He's sleeping like a baby",
        "Match": "FALSE",
        "Cnt": 1634
    },
    {
        "Text": "His story may not be true",
        "Match": "FALSE",
        "Cnt": 1635
    },
    {
        "Text": "How can I meet this quota?",
        "Match": "FALSE",
        "Cnt": 1636
    },
    {
        "Text": "How many bowls do we have?",
        "Match": "FALSE",
        "Cnt": 1637
    },
    {
        "Text": "How many cars do you have?",
        "Match": "FALSE",
        "Cnt": 1638
    },
    {
        "Text": "Hunger drove him to steal",
        "Match": "FALSE",
        "Cnt": 1639
    },
    {
        "Text": "I am able to read English",
        "Match": "FALSE",
        "Cnt": 1640
    },
    {
        "Text": "I am able to read English",
        "Match": "FALSE",
        "Cnt": 1641
    },
    {
        "Text": "I bought a book yesterday",
        "Match": "FALSE",
        "Cnt": 1642
    },
    {
        "Text": "I can't make it this time",
        "Match": "FALSE",
        "Cnt": 1643
    },
    {
        "Text": "I cannot walk any farther",
        "Match": "FALSE",
        "Cnt": 1644
    },
    {
        "Text": "I caught a glimpse of her",
        "Match": "FALSE",
        "Cnt": 1645
    },
    {
        "Text": "I feel like taking a rest",
        "Match": "FALSE",
        "Cnt": 1646
    },
    {
        "Text": "I fixed the car yesterday",
        "Match": "FALSE",
        "Cnt": 1647
    },
    {
        "Text": "I found out where she was",
        "Match": "FALSE",
        "Cnt": 1648
    },
    {
        "Text": "I get up at six every day",
        "Match": "FALSE",
        "Cnt": 1649
    },
    {
        "Text": "I have a Facebook account",
        "Match": "FALSE",
        "Cnt": 1650
    },
    {
        "Text": "I have no time to see you",
        "Match": "FALSE",
        "Cnt": 1651
    },
    {
        "Text": "I haven't seen Tom lately",
        "Match": "FALSE",
        "Cnt": 1652
    },
    {
        "Text": "I haven't seen him lately",
        "Match": "FALSE",
        "Cnt": 1653
    },
    {
        "Text": "I know how to drive a car",
        "Match": "FALSE",
        "Cnt": 1654
    },
    {
        "Text": "I like the way she smiles",
        "Match": "FALSE",
        "Cnt": 1655
    },
    {
        "Text": "I met him at the barber's",
        "Match": "FALSE",
        "Cnt": 1656
    },
    {
        "Text": "I sold it for ten dollars",
        "Match": "FALSE",
        "Cnt": 1657
    },
    {
        "Text": "I usually get up at eight",
        "Match": "FALSE",
        "Cnt": 1658
    },
    {
        "Text": "I want to see the manager",
        "Match": "FALSE",
        "Cnt": 1659
    },
    {
        "Text": "I want to see the manager",
        "Match": "FALSE",
        "Cnt": 1660
    },
    {
        "Text": "I want to travel with you",
        "Match": "FALSE",
        "Cnt": 1661
    },
    {
        "Text": "I was afraid he might die",
        "Match": "FALSE",
        "Cnt": 1662
    },
    {
        "Text": "I wish I had this problem",
        "Match": "FALSE",
        "Cnt": 1663
    },
    {
        "Text": "I wish I had this problem",
        "Match": "FALSE",
        "Cnt": 1664
    },
    {
        "Text": "I'll be there at five p",
        "Match": "FALSE",
        "Cnt": 1665
    },
    {
        "Text": "I'll bring one more towel",
        "Match": "FALSE",
        "Cnt": 1666
    },
    {
        "Text": "I'm busy with my homework",
        "Match": "FALSE",
        "Cnt": 1667
    },
    {
        "Text": "I'm disappointed with you",
        "Match": "FALSE",
        "Cnt": 1668
    },
    {
        "Text": "I'm glad to see you again",
        "Match": "FALSE",
        "Cnt": 1669
    },
    {
        "Text": "I'm interested in history",
        "Match": "FALSE",
        "Cnt": 1670
    },
    {
        "Text": "I'm standing in the shade",
        "Match": "FALSE",
        "Cnt": 1671
    },
    {
        "Text": "I'm standing in the shade",
        "Match": "FALSE",
        "Cnt": 1672
    },
    {
        "Text": "I'm waiting for my mother",
        "Match": "FALSE",
        "Cnt": 1673
    },
    {
        "Text": "It is a difficult problem",
        "Match": "FALSE",
        "Cnt": 1674
    },
    {
        "Text": "It is easy to add 5 to 10",
        "Match": "FALSE",
        "Cnt": 1675
    },
    {
        "Text": "It's already nine o'clock",
        "Match": "FALSE",
        "Cnt": 1676
    },
    {
        "Text": "It's for a friend of mine",
        "Match": "FALSE",
        "Cnt": 1677
    },
    {
        "Text": "Let's meet this afternoon",
        "Match": "FALSE",
        "Cnt": 1678
    },
    {
        "Text": "May I ask a few questions?",
        "Match": "FALSE",
        "Cnt": 1679
    },
    {
        "Text": "Mother bought me the book",
        "Match": "FALSE",
        "Cnt": 1680
    },
    {
        "Text": "My brother lives in Tokyo",
        "Match": "FALSE",
        "Cnt": 1681
    },
    {
        "Text": "My father may be sleeping",
        "Match": "FALSE",
        "Cnt": 1682
    },
    {
        "Text": "My father stopped smoking",
        "Match": "FALSE",
        "Cnt": 1683
    },
    {
        "Text": "My right foot is sleeping",
        "Match": "FALSE",
        "Cnt": 1684
    },
    {
        "Text": "My wife really hates cats",
        "Match": "FALSE",
        "Cnt": 1685
    },
    {
        "Text": "Never speak ill of others",
        "Match": "FALSE",
        "Cnt": 1686
    },
    {
        "Text": "One of my bags is missing",
        "Match": "FALSE",
        "Cnt": 1687
    },
    {
        "Text": "One of my bags is missing",
        "Match": "FALSE",
        "Cnt": 1688
    },
    {
        "Text": "School begins at 8:30 a",
        "Match": "FALSE",
        "Cnt": 1689
    },
    {
        "Text": "She did it all by herself",
        "Match": "FALSE",
        "Cnt": 1690
    },
    {
        "Text": "She has not come here yet",
        "Match": "FALSE",
        "Cnt": 1691
    },
    {
        "Text": "She looked at the picture",
        "Match": "FALSE",
        "Cnt": 1692
    },
    {
        "Text": "She showed me her new car",
        "Match": "FALSE",
        "Cnt": 1693
    },
    {
        "Text": "Smog causes plants to die",
        "Match": "FALSE",
        "Cnt": 1694
    },
    {
        "Text": "Some snakes are poisonous",
        "Match": "FALSE",
        "Cnt": 1695
    },
    {
        "Text": "Thank you for the present",
        "Match": "FALSE",
        "Cnt": 1696
    },
    {
        "Text": "The enemy won't get close",
        "Match": "FALSE",
        "Cnt": 1697
    },
    {
        "Text": "The haze enveloped London",
        "Match": "FALSE",
        "Cnt": 1698
    },
    {
        "Text": "The king abused his power",
        "Match": "FALSE",
        "Cnt": 1699
    },
    {
        "Text": "The prisoner was released",
        "Match": "FALSE",
        "Cnt": 1700
    },
    {
        "Text": "There is no TV in my room",
        "Match": "FALSE",
        "Cnt": 1701
    },
    {
        "Text": "There must be another way",
        "Match": "FALSE",
        "Cnt": 1702
    },
    {
        "Text": "These are very big apples",
        "Match": "FALSE",
        "Cnt": 1703
    },
    {
        "Text": "They are watching a movie",
        "Match": "FALSE",
        "Cnt": 1704
    },
    {
        "Text": "They looked at each other",
        "Match": "FALSE",
        "Cnt": 1705
    },
    {
        "Text": "This desk is made of wood",
        "Match": "FALSE",
        "Cnt": 1706
    },
    {
        "Text": "This is my father's house",
        "Match": "FALSE",
        "Cnt": 1707
    },
    {
        "Text": "Today is Independence Day",
        "Match": "FALSE",
        "Cnt": 1708
    },
    {
        "Text": "Tom couldn't help but cry",
        "Match": "FALSE",
        "Cnt": 1709
    },
    {
        "Text": "Tom couldn't help but cry",
        "Match": "FALSE",
        "Cnt": 1710
    },
    {
        "Text": "Twenty families live here",
        "Match": "FALSE",
        "Cnt": 1711
    },
    {
        "Text": "We all felt sorry for Tom",
        "Match": "FALSE",
        "Cnt": 1712
    },
    {
        "Text": "We painted the door green",
        "Match": "FALSE",
        "Cnt": 1713
    },
    {
        "Text": "We regard him as our hero",
        "Match": "FALSE",
        "Cnt": 1714
    },
    {
        "Text": "We walked around the pond",
        "Match": "FALSE",
        "Cnt": 1715
    },
    {
        "Text": "We're here to protect you",
        "Match": "FALSE",
        "Cnt": 1716
    },
    {
        "Text": "We're here to protect you",
        "Match": "FALSE",
        "Cnt": 1717
    },
    {
        "Text": "What a lucky person he is!",
        "Match": "FALSE",
        "Cnt": 1718
    },
    {
        "Text": "What did you do yesterday?",
        "Match": "FALSE",
        "Cnt": 1719
    },
    {
        "Text": "What do you want me to do?",
        "Match": "FALSE",
        "Cnt": 1720
    },
    {
        "Text": "What's your favorite food?",
        "Match": "FALSE",
        "Cnt": 1721
    },
    {
        "Text": "Why are you talking to me?",
        "Match": "FALSE",
        "Cnt": 1722
    },
    {
        "Text": "Will you make room for me?",
        "Match": "FALSE",
        "Cnt": 1723
    },
    {
        "Text": "Would you mind if I smoke?",
        "Match": "FALSE",
        "Cnt": 1724
    },
    {
        "Text": "Yesterday was my birthday",
        "Match": "FALSE",
        "Cnt": 1725
    },
    {
        "Text": "You are tired, aren't you?",
        "Match": "FALSE",
        "Cnt": 1726
    },
    {
        "Text": "You had better go at once",
        "Match": "FALSE",
        "Cnt": 1727
    },
    {
        "Text": "You keep a dog, don't you?",
        "Match": "FALSE",
        "Cnt": 1728
    },
    {
        "Text": "A crow is as black as coal",
        "Match": "FALSE",
        "Cnt": 1729
    },
    {
        "Text": "A man appeared at the door",
        "Match": "FALSE",
        "Cnt": 1730
    },
    {
        "Text": "Come see me again tomorrow",
        "Match": "FALSE",
        "Cnt": 1731
    },
    {
        "Text": "Do you have an appointment?",
        "Match": "FALSE",
        "Cnt": 1732
    },
    {
        "Text": "Don't fail to call me back",
        "Match": "FALSE",
        "Cnt": 1733
    },
    {
        "Text": "Don't say things like that",
        "Match": "FALSE",
        "Cnt": 1734
    },
    {
        "Text": "Each of them has a bicycle",
        "Match": "FALSE",
        "Cnt": 1735
    },
    {
        "Text": "Father is watering flowers",
        "Match": "FALSE",
        "Cnt": 1736
    },
    {
        "Text": "Greeks often eat fish, too",
        "Match": "FALSE",
        "Cnt": 1737
    },
    {
        "Text": "Have you ever seen a koala?",
        "Match": "FALSE",
        "Cnt": 1738
    },
    {
        "Text": "He asked me for some money",
        "Match": "FALSE",
        "Cnt": 1739
    },
    {
        "Text": "He became a police officer",
        "Match": "FALSE",
        "Cnt": 1740
    },
    {
        "Text": "He believes whatever I say",
        "Match": "FALSE",
        "Cnt": 1741
    },
    {
        "Text": "He decided to quit smoking",
        "Match": "FALSE",
        "Cnt": 1742
    },
    {
        "Text": "He did the work on his own",
        "Match": "FALSE",
        "Cnt": 1743
    },
    {
        "Text": "He is engaged to my sister",
        "Match": "FALSE",
        "Cnt": 1744
    },
    {
        "Text": "He occasionally visited me",
        "Match": "FALSE",
        "Cnt": 1745
    },
    {
        "Text": "He saw a dog near the door",
        "Match": "FALSE",
        "Cnt": 1746
    },
    {
        "Text": "He usually comes home late",
        "Match": "FALSE",
        "Cnt": 1747
    },
    {
        "Text": "He visited Kyoto last year",
        "Match": "FALSE",
        "Cnt": 1748
    },
    {
        "Text": "He's always late for class",
        "Match": "FALSE",
        "Cnt": 1749
    },
    {
        "Text": "His opinions are worthless",
        "Match": "FALSE",
        "Cnt": 1750
    },
    {
        "Text": "Honesty is the best policy",
        "Match": "FALSE",
        "Cnt": 1751
    },
    {
        "Text": "How long has she been sick?",
        "Match": "FALSE",
        "Cnt": 1752
    },
    {
        "Text": "How many books do you have?",
        "Match": "FALSE",
        "Cnt": 1753
    },
    {
        "Text": "I am interested in English",
        "Match": "FALSE",
        "Cnt": 1754
    },
    {
        "Text": "I arrived later than usual",
        "Match": "FALSE",
        "Cnt": 1755
    },
    {
        "Text": "I believe whatever he says",
        "Match": "FALSE",
        "Cnt": 1756
    },
    {
        "Text": "I bought two dozen pencils",
        "Match": "FALSE",
        "Cnt": 1757
    },
    {
        "Text": "I can't take any more work",
        "Match": "FALSE",
        "Cnt": 1758
    },
    {
        "Text": "I cover twenty miles a day",
        "Match": "FALSE",
        "Cnt": 1759
    },
    {
        "Text": "I don't believe him at all",
        "Match": "FALSE",
        "Cnt": 1760
    },
    {
        "Text": "I don't care what they say",
        "Match": "FALSE",
        "Cnt": 1761
    },
    {
        "Text": "I don't know what to study",
        "Match": "FALSE",
        "Cnt": 1762
    },
    {
        "Text": "I had to decline his offer",
        "Match": "FALSE",
        "Cnt": 1763
    },
    {
        "Text": "I sat between Tom and John",
        "Match": "FALSE",
        "Cnt": 1764
    },
    {
        "Text": "I was born on June 4, 1974",
        "Match": "FALSE",
        "Cnt": 1765
    },
    {
        "Text": "I was in London last month",
        "Match": "FALSE",
        "Cnt": 1766
    },
    {
        "Text": "I'd like a map of the city",
        "Match": "FALSE",
        "Cnt": 1767
    },
    {
        "Text": "I'm a good-for-nothing bum",
        "Match": "FALSE",
        "Cnt": 1768
    },
    {
        "Text": "I'm looking for an old man",
        "Match": "FALSE",
        "Cnt": 1769
    },
    {
        "Text": "Is the mouse dead or alive?",
        "Match": "FALSE",
        "Cnt": 1770
    },
    {
        "Text": "It hardly ever rains there",
        "Match": "FALSE",
        "Cnt": 1771
    },
    {
        "Text": "It is said that he is sick",
        "Match": "FALSE",
        "Cnt": 1772
    },
    {
        "Text": "It seems interesting to me",
        "Match": "FALSE",
        "Cnt": 1773
    },
    {
        "Text": "It seems interesting to me",
        "Match": "FALSE",
        "Cnt": 1774
    },
    {
        "Text": "It's raining cats and dogs",
        "Match": "FALSE",
        "Cnt": 1775
    },
    {
        "Text": "It's raining cats and dogs",
        "Match": "FALSE",
        "Cnt": 1776
    },
    {
        "Text": "It's the same for everyone",
        "Match": "FALSE",
        "Cnt": 1777
    },
    {
        "Text": "My aunt brought me flowers",
        "Match": "FALSE",
        "Cnt": 1778
    },
    {
        "Text": "My boss will not say 'yes'",
        "Match": "FALSE",
        "Cnt": 1779
    },
    {
        "Text": "Our train stopped suddenly",
        "Match": "FALSE",
        "Cnt": 1780
    },
    {
        "Text": "Place it wherever you like",
        "Match": "FALSE",
        "Cnt": 1781
    },
    {
        "Text": "She forgot to feed her dog",
        "Match": "FALSE",
        "Cnt": 1782
    },
    {
        "Text": "She has long arms and legs",
        "Match": "FALSE",
        "Cnt": 1783
    },
    {
        "Text": "She is in bed with a fever",
        "Match": "FALSE",
        "Cnt": 1784
    },
    {
        "Text": "She knew the story already",
        "Match": "FALSE",
        "Cnt": 1785
    },
    {
        "Text": "She likes her school a lot",
        "Match": "FALSE",
        "Cnt": 1786
    },
    {
        "Text": "She married Tom last month",
        "Match": "FALSE",
        "Cnt": 1787
    },
    {
        "Text": "She plays tennis very well",
        "Match": "FALSE",
        "Cnt": 1788
    },
    {
        "Text": "She suddenly became famous",
        "Match": "FALSE",
        "Cnt": 1789
    },
    {
        "Text": "She was crying in her room",
        "Match": "FALSE",
        "Cnt": 1790
    },
    {
        "Text": "Take good care of yourself",
        "Match": "FALSE",
        "Cnt": 1791
    },
    {
        "Text": "That's really a great idea",
        "Match": "FALSE",
        "Cnt": 1792
    },
    {
        "Text": "The box he found was empty",
        "Match": "FALSE",
        "Cnt": 1793
    },
    {
        "Text": "The bride suddenly laughed",
        "Match": "FALSE",
        "Cnt": 1794
    },
    {
        "Text": "The man hit me on the head",
        "Match": "FALSE",
        "Cnt": 1795
    },
    {
        "Text": "The medicine tastes bitter",
        "Match": "FALSE",
        "Cnt": 1796
    },
    {
        "Text": "The mud clung to his shoes",
        "Match": "FALSE",
        "Cnt": 1797
    },
    {
        "Text": "The novel is very exciting",
        "Match": "FALSE",
        "Cnt": 1798
    },
    {
        "Text": "The paint hasn't dried yet",
        "Match": "FALSE",
        "Cnt": 1799
    },
    {
        "Text": "The rain continued all day",
        "Match": "FALSE",
        "Cnt": 1800
    },
    {
        "Text": "The water is not drinkable",
        "Match": "FALSE",
        "Cnt": 1801
    },
    {
        "Text": "There is a bag on the desk",
        "Match": "FALSE",
        "Cnt": 1802
    },
    {
        "Text": "This car was made in Japan",
        "Match": "FALSE",
        "Cnt": 1803
    },
    {
        "Text": "This is the monsoon season",
        "Match": "FALSE",
        "Cnt": 1804
    },
    {
        "Text": "This word comes from Greek",
        "Match": "FALSE",
        "Cnt": 1805
    },
    {
        "Text": "Tom and I'll both be there",
        "Match": "FALSE",
        "Cnt": 1806
    },
    {
        "Text": "Tom, I want to talk to you",
        "Match": "FALSE",
        "Cnt": 1807
    },
    {
        "Text": "Turn off the light, please",
        "Match": "FALSE",
        "Cnt": 1808
    },
    {
        "Text": "Turn off the light, please",
        "Match": "FALSE",
        "Cnt": 1809
    },
    {
        "Text": "We all laughed at his joke",
        "Match": "FALSE",
        "Cnt": 1810
    },
    {
        "Text": "We celebrated his birthday",
        "Match": "FALSE",
        "Cnt": 1811
    },
    {
        "Text": "We don't know where we are",
        "Match": "FALSE",
        "Cnt": 1812
    },
    {
        "Text": "We should keep our promise",
        "Match": "FALSE",
        "Cnt": 1813
    },
    {
        "Text": "We voted for the candidate",
        "Match": "FALSE",
        "Cnt": 1814
    },
    {
        "Text": "We voted for the candidate",
        "Match": "FALSE",
        "Cnt": 1815
    },
    {
        "Text": "We want complete sentences",
        "Match": "FALSE",
        "Cnt": 1816
    },
    {
        "Text": "We've got that figured out",
        "Match": "FALSE",
        "Cnt": 1817
    },
    {
        "Text": "What I said hurt his pride",
        "Match": "FALSE",
        "Cnt": 1818
    },
    {
        "Text": "What do you call this bird?",
        "Match": "FALSE",
        "Cnt": 1819
    },
    {
        "Text": "What happened to our order?",
        "Match": "FALSE",
        "Cnt": 1820
    },
    {
        "Text": "Where did all the bread go?",
        "Match": "FALSE",
        "Cnt": 1821
    },
    {
        "Text": "Where is the changing room?",
        "Match": "FALSE",
        "Cnt": 1822
    },
    {
        "Text": "Why don't you listen to me?",
        "Match": "FALSE",
        "Cnt": 1823
    },
    {
        "Text": "Will you turn on the light?",
        "Match": "FALSE",
        "Cnt": 1824
    },
    {
        "Text": "You are always complaining",
        "Match": "FALSE",
        "Cnt": 1825
    },
    {
        "Text": "You are on the wrong train",
        "Match": "FALSE",
        "Cnt": 1826
    },
    {
        "Text": "A day has twenty-four hours",
        "Match": "FALSE",
        "Cnt": 1827
    },
    {
        "Text": "Are you for or against this?",
        "Match": "FALSE",
        "Cnt": 1828
    },
    {
        "Text": "At last, we got to the lake",
        "Match": "FALSE",
        "Cnt": 1829
    },
    {
        "Text": "Bring your sister next time",
        "Match": "FALSE",
        "Cnt": 1830
    },
    {
        "Text": "Can you teach me how to fly?",
        "Match": "FALSE",
        "Cnt": 1831
    },
    {
        "Text": "Canada is larger than Japan",
        "Match": "FALSE",
        "Cnt": 1832
    },
    {
        "Text": "Could you speak more slowly?",
        "Match": "FALSE",
        "Cnt": 1833
    },
    {
        "Text": "Do you have any soft drinks?",
        "Match": "FALSE",
        "Cnt": 1834
    },
    {
        "Text": "Do you have time on Tuesday?",
        "Match": "FALSE",
        "Cnt": 1835
    },
    {
        "Text": "Do you want to go somewhere?",
        "Match": "FALSE",
        "Cnt": 1836
    },
    {
        "Text": "Do you want to go somewhere?",
        "Match": "FALSE",
        "Cnt": 1837
    },
    {
        "Text": "Everyone felt sorry for Tom",
        "Match": "FALSE",
        "Cnt": 1838
    },
    {
        "Text": "Everyone speaks well of him",
        "Match": "FALSE",
        "Cnt": 1839
    },
    {
        "Text": "France is in Western Europe",
        "Match": "FALSE",
        "Cnt": 1840
    },
    {
        "Text": "France is in western Europe",
        "Match": "FALSE",
        "Cnt": 1841
    },
    {
        "Text": "He closed the door suddenly",
        "Match": "FALSE",
        "Cnt": 1842
    },
    {
        "Text": "He could not breathe deeply",
        "Match": "FALSE",
        "Cnt": 1843
    },
    {
        "Text": "He doesn't know how to swim",
        "Match": "FALSE",
        "Cnt": 1844
    },
    {
        "Text": "He explained the rule to me",
        "Match": "FALSE",
        "Cnt": 1845
    },
    {
        "Text": "He is digging his own grave",
        "Match": "FALSE",
        "Cnt": 1846
    },
    {
        "Text": "He plays baseball every day",
        "Match": "FALSE",
        "Cnt": 1847
    },
    {
        "Text": "He prefers French to German",
        "Match": "FALSE",
        "Cnt": 1848
    },
    {
        "Text": "He read this book yesterday",
        "Match": "FALSE",
        "Cnt": 1849
    },
    {
        "Text": "He repeated his name slowly",
        "Match": "FALSE",
        "Cnt": 1850
    },
    {
        "Text": "He treats me like his slave",
        "Match": "FALSE",
        "Cnt": 1851
    },
    {
        "Text": "He went there instead of me",
        "Match": "FALSE",
        "Cnt": 1852
    },
    {
        "Text": "His birthday is August 21st",
        "Match": "FALSE",
        "Cnt": 1853
    },
    {
        "Text": "How long will you stay here?",
        "Match": "FALSE",
        "Cnt": 1854
    },
    {
        "Text": "I accompanied her on a walk",
        "Match": "FALSE",
        "Cnt": 1855
    },
    {
        "Text": "I believe you like your job",
        "Match": "FALSE",
        "Cnt": 1856
    },
    {
        "Text": "I didn't go out last Sunday",
        "Match": "FALSE",
        "Cnt": 1857
    },
    {
        "Text": "I don't know if he knows it",
        "Match": "FALSE",
        "Cnt": 1858
    },
    {
        "Text": "I don't know what Tom knows",
        "Match": "FALSE",
        "Cnt": 1859
    },
    {
        "Text": "I don't know what they know",
        "Match": "FALSE",
        "Cnt": 1860
    },
    {
        "Text": "I explained the rule to him",
        "Match": "FALSE",
        "Cnt": 1861
    },
    {
        "Text": "I gave him what money I had",
        "Match": "FALSE",
        "Cnt": 1862
    },
    {
        "Text": "I had never seen him before",
        "Match": "FALSE",
        "Cnt": 1863
    },
    {
        "Text": "I have already done my work",
        "Match": "FALSE",
        "Cnt": 1864
    },
    {
        "Text": "I have just cleaned my room",
        "Match": "FALSE",
        "Cnt": 1865
    },
    {
        "Text": "I have seen her three times",
        "Match": "FALSE",
        "Cnt": 1866
    },
    {
        "Text": "I have to answer his letter",
        "Match": "FALSE",
        "Cnt": 1867
    },
    {
        "Text": "I met your father yesterday",
        "Match": "FALSE",
        "Cnt": 1868
    },
    {
        "Text": "I prefer walking to cycling",
        "Match": "FALSE",
        "Cnt": 1869
    },
    {
        "Text": "I saw him crossing the road",
        "Match": "FALSE",
        "Cnt": 1870
    },
    {
        "Text": "I was born in Osaka in 1977",
        "Match": "FALSE",
        "Cnt": 1871
    },
    {
        "Text": "I will call on him tomorrow",
        "Match": "FALSE",
        "Cnt": 1872
    },
    {
        "Text": "I'll be on duty this Sunday",
        "Match": "FALSE",
        "Cnt": 1873
    },
    {
        "Text": "I'm sorry, my father is out",
        "Match": "FALSE",
        "Cnt": 1874
    },
    {
        "Text": "Insert it wherever you like",
        "Match": "FALSE",
        "Cnt": 1875
    },
    {
        "Text": "Iron is a very useful metal",
        "Match": "FALSE",
        "Cnt": 1876
    },
    {
        "Text": "Is Spanish spoken in Mexico?",
        "Match": "FALSE",
        "Cnt": 1877
    },
    {
        "Text": "Is it about ten million yen?",
        "Match": "FALSE",
        "Cnt": 1878
    },
    {
        "Text": "Is it hard to speak English?",
        "Match": "FALSE",
        "Cnt": 1879
    },
    {
        "Text": "It is a sheer waste of time",
        "Match": "FALSE",
        "Cnt": 1880
    },
    {
        "Text": "It was easy for me to do so",
        "Match": "FALSE",
        "Cnt": 1881
    },
    {
        "Text": "It was too difficult for me",
        "Match": "FALSE",
        "Cnt": 1882
    },
    {
        "Text": "It's like a dream come true",
        "Match": "FALSE",
        "Cnt": 1883
    },
    {
        "Text": "Let's cut down our expenses",
        "Match": "FALSE",
        "Cnt": 1884
    },
    {
        "Text": "Mary loves going to the spa",
        "Match": "FALSE",
        "Cnt": 1885
    },
    {
        "Text": "My jeans shrank in the wash",
        "Match": "FALSE",
        "Cnt": 1886
    },
    {
        "Text": "No answer is also an answer",
        "Match": "FALSE",
        "Cnt": 1887
    },
    {
        "Text": "No one can move the big box",
        "Match": "FALSE",
        "Cnt": 1888
    },
    {
        "Text": "Nobody answered my question",
        "Match": "FALSE",
        "Cnt": 1889
    },
    {
        "Text": "Nobody else offered to help",
        "Match": "FALSE",
        "Cnt": 1890
    },
    {
        "Text": "Please give me a cup of tea",
        "Match": "FALSE",
        "Cnt": 1891
    },
    {
        "Text": "Please speak in a low voice",
        "Match": "FALSE",
        "Cnt": 1892
    },
    {
        "Text": "Please speak in a low voice",
        "Match": "FALSE",
        "Cnt": 1893
    },
    {
        "Text": "See what's going on outside",
        "Match": "FALSE",
        "Cnt": 1894
    },
    {
        "Text": "She allowed him to go alone",
        "Match": "FALSE",
        "Cnt": 1895
    },
    {
        "Text": "She declined the invitation",
        "Match": "FALSE",
        "Cnt": 1896
    },
    {
        "Text": "She dialed the wrong number",
        "Match": "FALSE",
        "Cnt": 1897
    },
    {
        "Text": "She said that she was happy",
        "Match": "FALSE",
        "Cnt": 1898
    },
    {
        "Text": "She saved a hundred dollars",
        "Match": "FALSE",
        "Cnt": 1899
    },
    {
        "Text": "She was robbed of her purse",
        "Match": "FALSE",
        "Cnt": 1900
    },
    {
        "Text": "She wears her hair in a bun",
        "Match": "FALSE",
        "Cnt": 1901
    },
    {
        "Text": "Smoking is not allowed here",
        "Match": "FALSE",
        "Cnt": 1902
    },
    {
        "Text": "Soldiers are used to danger",
        "Match": "FALSE",
        "Cnt": 1903
    },
    {
        "Text": "Someone knocked on the door",
        "Match": "FALSE",
        "Cnt": 1904
    },
    {
        "Text": "Spanish is spoken in Mexico",
        "Match": "FALSE",
        "Cnt": 1905
    },
    {
        "Text": "Speaking English isn't easy",
        "Match": "FALSE",
        "Cnt": 1906
    },
    {
        "Text": "Stand still and keep silent",
        "Match": "FALSE",
        "Cnt": 1907
    },
    {
        "Text": "Take off your socks, please",
        "Match": "FALSE",
        "Cnt": 1908
    },
    {
        "Text": "Ten houses were burned down",
        "Match": "FALSE",
        "Cnt": 1909
    },
    {
        "Text": "Thank you for the other day",
        "Match": "FALSE",
        "Cnt": 1910
    },
    {
        "Text": "Thank you very much, doctor",
        "Match": "FALSE",
        "Cnt": 1911
    },
    {
        "Text": "That town is two miles away",
        "Match": "FALSE",
        "Cnt": 1912
    },
    {
        "Text": "That town is two miles away",
        "Match": "FALSE",
        "Cnt": 1913
    },
    {
        "Text": "The Japanese have dark eyes",
        "Match": "FALSE",
        "Cnt": 1914
    },
    {
        "Text": "The hot water isn't running",
        "Match": "FALSE",
        "Cnt": 1915
    },
    {
        "Text": "The room smelled of tobacco",
        "Match": "FALSE",
        "Cnt": 1916
    },
    {
        "Text": "The store is not open today",
        "Match": "FALSE",
        "Cnt": 1917
    },
    {
        "Text": "The store is not open today",
        "Match": "FALSE",
        "Cnt": 1918
    },
    {
        "Text": "There is a book on the desk",
        "Match": "FALSE",
        "Cnt": 1919
    },
    {
        "Text": "They are both good teachers",
        "Match": "FALSE",
        "Cnt": 1920
    },
    {
        "Text": "This house has eleven rooms",
        "Match": "FALSE",
        "Cnt": 1921
    },
    {
        "Text": "This must be a real diamond",
        "Match": "FALSE",
        "Cnt": 1922
    },
    {
        "Text": "Today I turn four years old",
        "Match": "FALSE",
        "Cnt": 1923
    },
    {
        "Text": "Tom isn't able to drive yet",
        "Match": "FALSE",
        "Cnt": 1924
    },
    {
        "Text": "Tom saved her from the fire",
        "Match": "FALSE",
        "Cnt": 1925
    },
    {
        "Text": "Try to improve your English",
        "Match": "FALSE",
        "Cnt": 1926
    },
    {
        "Text": "We drink our tea with sugar",
        "Match": "FALSE",
        "Cnt": 1927
    },
    {
        "Text": "We drink our tea with sugar",
        "Match": "FALSE",
        "Cnt": 1928
    },
    {
        "Text": "We really enjoyed ourselves",
        "Match": "FALSE",
        "Cnt": 1929
    },
    {
        "Text": "We were next-door neighbors",
        "Match": "FALSE",
        "Cnt": 1930
    },
    {
        "Text": "What have you come here for?",
        "Match": "FALSE",
        "Cnt": 1931
    },
    {
        "Text": "What have you come here for?",
        "Match": "FALSE",
        "Cnt": 1932
    },
    {
        "Text": "Where is the south terminal?",
        "Match": "FALSE",
        "Cnt": 1933
    },
    {
        "Text": "Where would you like to sit?",
        "Match": "FALSE",
        "Cnt": 1934
    },
    {
        "Text": "Why don't you come visit us?",
        "Match": "FALSE",
        "Cnt": 1935
    },
    {
        "Text": "Would you like to go abroad?",
        "Match": "FALSE",
        "Cnt": 1936
    },
    {
        "Text": "You are not coming, are you?",
        "Match": "FALSE",
        "Cnt": 1937
    },
    {
        "Text": "You look nice in that dress",
        "Match": "FALSE",
        "Cnt": 1938
    },
    {
        "Text": "Always keep your office tidy",
        "Match": "FALSE",
        "Cnt": 1939
    },
    {
        "Text": "Are they Japanese or Chinese?",
        "Match": "FALSE",
        "Cnt": 1940
    },
    {
        "Text": "Are you meeting someone here?",
        "Match": "FALSE",
        "Cnt": 1941
    },
    {
        "Text": "Brush your teeth after meals",
        "Match": "FALSE",
        "Cnt": 1942
    },
    {
        "Text": "Brush your teeth after meals",
        "Match": "FALSE",
        "Cnt": 1943
    },
    {
        "Text": "Correct the underlined words",
        "Match": "FALSE",
        "Cnt": 1944
    },
    {
        "Text": "Do you have any tickets left?",
        "Match": "FALSE",
        "Cnt": 1945
    },
    {
        "Text": "Do you have to make a speech?",
        "Match": "FALSE",
        "Cnt": 1946
    },
    {
        "Text": "Do you know what he has done?",
        "Match": "FALSE",
        "Cnt": 1947
    },
    {
        "Text": "Don't force the child to eat",
        "Match": "FALSE",
        "Cnt": 1948
    },
    {
        "Text": "Don't lean against this wall",
        "Match": "FALSE",
        "Cnt": 1949
    },
    {
        "Text": "English is spoken in America",
        "Match": "FALSE",
        "Cnt": 1950
    },
    {
        "Text": "Football is my favorite game",
        "Match": "FALSE",
        "Cnt": 1951
    },
    {
        "Text": "Have you ever been to Africa?",
        "Match": "FALSE",
        "Cnt": 1952
    },
    {
        "Text": "Have you ever been to Africa?",
        "Match": "FALSE",
        "Cnt": 1953
    },
    {
        "Text": "Have you ever been to Canada?",
        "Match": "FALSE",
        "Cnt": 1954
    },
    {
        "Text": "Have you ever written a book?",
        "Match": "FALSE",
        "Cnt": 1955
    },
    {
        "Text": "Have your roses come out yet?",
        "Match": "FALSE",
        "Cnt": 1956
    },
    {
        "Text": "He came to see you yesterday",
        "Match": "FALSE",
        "Cnt": 1957
    },
    {
        "Text": "He changed schools last year",
        "Match": "FALSE",
        "Cnt": 1958
    },
    {
        "Text": "He doesn't have long to live",
        "Match": "FALSE",
        "Cnt": 1959
    },
    {
        "Text": "He eats lunch at a cafeteria",
        "Match": "FALSE",
        "Cnt": 1960
    },
    {
        "Text": "He is good at playing tennis",
        "Match": "FALSE",
        "Cnt": 1961
    },
    {
        "Text": "He pulled his son by the ear",
        "Match": "FALSE",
        "Cnt": 1962
    },
    {
        "Text": "He set fire to his own house",
        "Match": "FALSE",
        "Cnt": 1963
    },
    {
        "Text": "He wants these shirts washed",
        "Match": "FALSE",
        "Cnt": 1964
    },
    {
        "Text": "He wishes to become a doctor",
        "Match": "FALSE",
        "Cnt": 1965
    },
    {
        "Text": "He's out of town on business",
        "Match": "FALSE",
        "Cnt": 1966
    },
    {
        "Text": "His clothes always smell bad",
        "Match": "FALSE",
        "Cnt": 1967
    },
    {
        "Text": "His long speech bored us all",
        "Match": "FALSE",
        "Cnt": 1968
    },
    {
        "Text": "How did you come to know her?",
        "Match": "FALSE",
        "Cnt": 1969
    },
    {
        "Text": "I advise you to stop smoking",
        "Match": "FALSE",
        "Cnt": 1970
    },
    {
        "Text": "I advise you to stop smoking",
        "Match": "FALSE",
        "Cnt": 1971
    },
    {
        "Text": "I agree with you to a degree",
        "Match": "FALSE",
        "Cnt": 1972
    },
    {
        "Text": "I am more beautiful than you",
        "Match": "FALSE",
        "Cnt": 1973
    },
    {
        "Text": "I am more beautiful than you",
        "Match": "FALSE",
        "Cnt": 1974
    },
    {
        "Text": "I am pleased with the result",
        "Match": "FALSE",
        "Cnt": 1975
    },
    {
        "Text": "I bought two bottles of milk",
        "Match": "FALSE",
        "Cnt": 1976
    },
    {
        "Text": "I can't allow you to do that",
        "Match": "FALSE",
        "Cnt": 1977
    },
    {
        "Text": "I can't really talk about it",
        "Match": "FALSE",
        "Cnt": 1978
    },
    {
        "Text": "I didn't want this to happen",
        "Match": "FALSE",
        "Cnt": 1979
    },
    {
        "Text": "I don't feel like eating now",
        "Match": "FALSE",
        "Cnt": 1980
    },
    {
        "Text": "I don't like to drink coffee",
        "Match": "FALSE",
        "Cnt": 1981
    },
    {
        "Text": "I followed the deer's tracks",
        "Match": "FALSE",
        "Cnt": 1982
    },
    {
        "Text": "I gave up smoking for a year",
        "Match": "FALSE",
        "Cnt": 1983
    },
    {
        "Text": "I have a bad pain in my back",
        "Match": "FALSE",
        "Cnt": 1984
    },
    {
        "Text": "I informed her of my success",
        "Match": "FALSE",
        "Cnt": 1985
    },
    {
        "Text": "I like both science and math",
        "Match": "FALSE",
        "Cnt": 1986
    },
    {
        "Text": "I mentioned your name to him",
        "Match": "FALSE",
        "Cnt": 1987
    },
    {
        "Text": "I was laughed at by everyone",
        "Match": "FALSE",
        "Cnt": 1988
    },
    {
        "Text": "I went there dozens of times",
        "Match": "FALSE",
        "Cnt": 1989
    },
    {
        "Text": "I worked on the farm all day",
        "Match": "FALSE",
        "Cnt": 1990
    },
    {
        "Text": "I'm anxious about his safety",
        "Match": "FALSE",
        "Cnt": 1991
    },
    {
        "Text": "I'm catching the 11:00 train",
        "Match": "FALSE",
        "Cnt": 1992
    },
    {
        "Text": "It appears that he is honest",
        "Match": "FALSE",
        "Cnt": 1993
    },
    {
        "Text": "It was her fate to die young",
        "Match": "FALSE",
        "Cnt": 1994
    },
    {
        "Text": "It's an answer to her letter",
        "Match": "FALSE",
        "Cnt": 1995
    },
    {
        "Text": "It's no use arguing with him",
        "Match": "FALSE",
        "Cnt": 1996
    },
    {
        "Text": "Keep down, or you'll be shot",
        "Match": "FALSE",
        "Cnt": 1997
    },
    {
        "Text": "Most people like watching TV",
        "Match": "FALSE",
        "Cnt": 1998
    },
    {
        "Text": "My brother has a good memory",
        "Match": "FALSE",
        "Cnt": 1999
    },
    {
        "Text": "My father has just come home",
        "Match": "FALSE",
        "Cnt": 2000
    },
    {
        "Text": "My grandmother speaks slowly",
        "Match": "FALSE",
        "Cnt": 2001
    },
    {
        "Text": "My hobby is collecting coins",
        "Match": "FALSE",
        "Cnt": 2002
    },
    {
        "Text": "My telephone is out of order",
        "Match": "FALSE",
        "Cnt": 2003
    },
    {
        "Text": "Now they have three children",
        "Match": "FALSE",
        "Cnt": 2004
    },
    {
        "Text": "One language is never enough",
        "Match": "FALSE",
        "Cnt": 2005
    },
    {
        "Text": "Please make yourself at home",
        "Match": "FALSE",
        "Cnt": 2006
    },
    {
        "Text": "Please make yourself at home",
        "Match": "FALSE",
        "Cnt": 2007
    },
    {
        "Text": "Please show me your notebook",
        "Match": "FALSE",
        "Cnt": 2008
    },
    {
        "Text": "Please wait for five minutes",
        "Match": "FALSE",
        "Cnt": 2009
    },
    {
        "Text": "Say which one you would like",
        "Match": "FALSE",
        "Cnt": 2010
    },
    {
        "Text": "Seicho Matumoto died in 1992",
        "Match": "FALSE",
        "Cnt": 2011
    },
    {
        "Text": "She died yesterday afternoon",
        "Match": "FALSE",
        "Cnt": 2012
    },
    {
        "Text": "She will be back before long",
        "Match": "FALSE",
        "Cnt": 2013
    },
    {
        "Text": "Stop beating around the bush",
        "Match": "FALSE",
        "Cnt": 2014
    },
    {
        "Text": "Tea is widely grown in India",
        "Match": "FALSE",
        "Cnt": 2015
    },
    {
        "Text": "That is no business of yours",
        "Match": "FALSE",
        "Cnt": 2016
    },
    {
        "Text": "That's because you're a girl",
        "Match": "FALSE",
        "Cnt": 2017
    },
    {
        "Text": "The apple has begun to decay",
        "Match": "FALSE",
        "Cnt": 2018
    },
    {
        "Text": "The capital of Italy is Rome",
        "Match": "FALSE",
        "Cnt": 2019
    },
    {
        "Text": "The car hit a telephone pole",
        "Match": "FALSE",
        "Cnt": 2020
    },
    {
        "Text": "The cliff is almost vertical",
        "Match": "FALSE",
        "Cnt": 2021
    },
    {
        "Text": "The girl did nothing but cry",
        "Match": "FALSE",
        "Cnt": 2022
    },
    {
        "Text": "The horse is a useful animal",
        "Match": "FALSE",
        "Cnt": 2023
    },
    {
        "Text": "The king crushed his enemies",
        "Match": "FALSE",
        "Cnt": 2024
    },
    {
        "Text": "The monkey climbed up a tree",
        "Match": "FALSE",
        "Cnt": 2025
    },
    {
        "Text": "The population is increasing",
        "Match": "FALSE",
        "Cnt": 2026
    },
    {
        "Text": "The population is increasing",
        "Match": "FALSE",
        "Cnt": 2027
    },
    {
        "Text": "The ship set sail for Bombay",
        "Match": "FALSE",
        "Cnt": 2028
    },
    {
        "Text": "The train ran off the tracks",
        "Match": "FALSE",
        "Cnt": 2029
    },
    {
        "Text": "There is a desk in this room",
        "Match": "FALSE",
        "Cnt": 2030
    },
    {
        "Text": "They abandoned their country",
        "Match": "FALSE",
        "Cnt": 2031
    },
    {
        "Text": "They are talking about music",
        "Match": "FALSE",
        "Cnt": 2032
    },
    {
        "Text": "They resolved to work harder",
        "Match": "FALSE",
        "Cnt": 2033
    },
    {
        "Text": "This was Rodica's fifth book",
        "Match": "FALSE",
        "Cnt": 2034
    },
    {
        "Text": "Wash your hands before meals",
        "Match": "FALSE",
        "Cnt": 2035
    },
    {
        "Text": "We should love our neighbors",
        "Match": "FALSE",
        "Cnt": 2036
    },
    {
        "Text": "What she says sounds strange",
        "Match": "FALSE",
        "Cnt": 2037
    },
    {
        "Text": "When are you going to Europe?",
        "Match": "FALSE",
        "Cnt": 2038
    },
    {
        "Text": "When did the accident happen?",
        "Match": "FALSE",
        "Cnt": 2039
    },
    {
        "Text": "When did the accident happen?",
        "Match": "FALSE",
        "Cnt": 2040
    },
    {
        "Text": "Won't you join us for dinner?",
        "Match": "FALSE",
        "Cnt": 2041
    },
    {
        "Text": "You didn't tell him anything?",
        "Match": "FALSE",
        "Cnt": 2042
    },
    {
        "Text": "You must send for the doctor",
        "Match": "FALSE",
        "Cnt": 2043
    },
    {
        "Text": "Are you interested in flowers?",
        "Match": "FALSE",
        "Cnt": 2044
    },
    {
        "Text": "Can you teach me how to steal?",
        "Match": "FALSE",
        "Cnt": 2045
    },
    {
        "Text": "Could I please use your phone?",
        "Match": "FALSE",
        "Cnt": 2046
    },
    {
        "Text": "Do you live with your parents?",
        "Match": "FALSE",
        "Cnt": 2047
    },
    {
        "Text": "Do you remember what she said?",
        "Match": "FALSE",
        "Cnt": 2048
    },
    {
        "Text": "Don't go back on your promise",
        "Match": "FALSE",
        "Cnt": 2049
    },
    {
        "Text": "Excuse me, is this seat taken?",
        "Match": "FALSE",
        "Cnt": 2050
    },
    {
        "Text": "Few people live on the island",
        "Match": "FALSE",
        "Cnt": 2051
    },
    {
        "Text": "Half of the apples are rotten",
        "Match": "FALSE",
        "Cnt": 2052
    },
    {
        "Text": "He concealed the fact from me",
        "Match": "FALSE",
        "Cnt": 2053
    },
    {
        "Text": "He did it as he had been told",
        "Match": "FALSE",
        "Cnt": 2054
    },
    {
        "Text": "He is accustomed to hard work",
        "Match": "FALSE",
        "Cnt": 2055
    },
    {
        "Text": "He looked into the boy's eyes",
        "Match": "FALSE",
        "Cnt": 2056
    },
    {
        "Text": "He made many costly purchases",
        "Match": "FALSE",
        "Cnt": 2057
    },
    {
        "Text": "He spread butter on the bread",
        "Match": "FALSE",
        "Cnt": 2058
    },
    {
        "Text": "He took advantage of my youth",
        "Match": "FALSE",
        "Cnt": 2059
    },
    {
        "Text": "He took advantage of my youth",
        "Match": "FALSE",
        "Cnt": 2060
    },
    {
        "Text": "He was walking toward the sea",
        "Match": "FALSE",
        "Cnt": 2061
    },
    {
        "Text": "He went to New York on Monday",
        "Match": "FALSE",
        "Cnt": 2062
    },
    {
        "Text": "He will return within 3 hours",
        "Match": "FALSE",
        "Cnt": 2063
    },
    {
        "Text": "How about going to the movies?",
        "Match": "FALSE",
        "Cnt": 2064
    },
    {
        "Text": "How long have you been abroad?",
        "Match": "FALSE",
        "Cnt": 2065
    },
    {
        "Text": "How long have you been abroad?",
        "Match": "FALSE",
        "Cnt": 2066
    },
    {
        "Text": "How was the weather yesterday?",
        "Match": "FALSE",
        "Cnt": 2067
    },
    {
        "Text": "I accompanied him on the trip",
        "Match": "FALSE",
        "Cnt": 2068
    },
    {
        "Text": "I am sorry if I disturbed you",
        "Match": "FALSE",
        "Cnt": 2069
    },
    {
        "Text": "I can't bear the sight of him",
        "Match": "FALSE",
        "Cnt": 2070
    },
    {
        "Text": "I can't put up with this cold",
        "Match": "FALSE",
        "Cnt": 2071
    },
    {
        "Text": "I don't go to work on Sundays",
        "Match": "FALSE",
        "Cnt": 2072
    },
    {
        "Text": "I don't know if she will come",
        "Match": "FALSE",
        "Cnt": 2073
    },
    {
        "Text": "I don't think it's reasonable",
        "Match": "FALSE",
        "Cnt": 2074
    },
    {
        "Text": "I don't watch much basketball",
        "Match": "FALSE",
        "Cnt": 2075
    },
    {
        "Text": "I felt that I should help her",
        "Match": "FALSE",
        "Cnt": 2076
    },
    {
        "Text": "I have no idea how he escaped",
        "Match": "FALSE",
        "Cnt": 2077
    },
    {
        "Text": "I have not seen him in months",
        "Match": "FALSE",
        "Cnt": 2078
    },
    {
        "Text": "I have to put the baby to bed",
        "Match": "FALSE",
        "Cnt": 2079
    },
    {
        "Text": "I hope that it rains tomorrow",
        "Match": "FALSE",
        "Cnt": 2080
    },
    {
        "Text": "I take a bath every other day",
        "Match": "FALSE",
        "Cnt": 2081
    },
    {
        "Text": "I was caught in a traffic jam",
        "Match": "FALSE",
        "Cnt": 2082
    },
    {
        "Text": "I was caught in a traffic jam",
        "Match": "FALSE",
        "Cnt": 2083
    },
    {
        "Text": "I will be pleased to help you",
        "Match": "FALSE",
        "Cnt": 2084
    },
    {
        "Text": "I will go to America tomorrow",
        "Match": "FALSE",
        "Cnt": 2085
    },
    {
        "Text": "I'm sure I've seen him before",
        "Match": "FALSE",
        "Cnt": 2086
    },
    {
        "Text": "I'm thinking of changing jobs",
        "Match": "FALSE",
        "Cnt": 2087
    },
    {
        "Text": "It's four o'clock by my watch",
        "Match": "FALSE",
        "Cnt": 2088
    },
    {
        "Text": "Man can't live without dreams",
        "Match": "FALSE",
        "Cnt": 2089
    },
    {
        "Text": "Playing tennis is easy for me",
        "Match": "FALSE",
        "Cnt": 2090
    },
    {
        "Text": "Please feed the dog every day",
        "Match": "FALSE",
        "Cnt": 2091
    },
    {
        "Text": "Please turn on the television",
        "Match": "FALSE",
        "Cnt": 2092
    },
    {
        "Text": "School begins at eight-thirty",
        "Match": "FALSE",
        "Cnt": 2093
    },
    {
        "Text": "She forgot to mail the letter",
        "Match": "FALSE",
        "Cnt": 2094
    },
    {
        "Text": "She forgot to mail the letter",
        "Match": "FALSE",
        "Cnt": 2095
    },
    {
        "Text": "She is not afraid of anything",
        "Match": "FALSE",
        "Cnt": 2096
    },
    {
        "Text": "She is not afraid of anything",
        "Match": "FALSE",
        "Cnt": 2097
    },
    {
        "Text": "She thought for a few minutes",
        "Match": "FALSE",
        "Cnt": 2098
    },
    {
        "Text": "The flowers have all withered",
        "Match": "FALSE",
        "Cnt": 2099
    },
    {
        "Text": "The king governed the country",
        "Match": "FALSE",
        "Cnt": 2100
    },
    {
        "Text": "The patient breathed his last",
        "Match": "FALSE",
        "Cnt": 2101
    },
    {
        "Text": "The ship is bound for Finland",
        "Match": "FALSE",
        "Cnt": 2102
    },
    {
        "Text": "The vase was broken to pieces",
        "Match": "FALSE",
        "Cnt": 2103
    },
    {
        "Text": "The war is going in our favor",
        "Match": "FALSE",
        "Cnt": 2104
    },
    {
        "Text": "There is a cat under the desk",
        "Match": "FALSE",
        "Cnt": 2105
    },
    {
        "Text": "There is no future in his job",
        "Match": "FALSE",
        "Cnt": 2106
    },
    {
        "Text": "They consider him intelligent",
        "Match": "FALSE",
        "Cnt": 2107
    },
    {
        "Text": "They have no house to live in",
        "Match": "FALSE",
        "Cnt": 2108
    },
    {
        "Text": "They must have made a mistake",
        "Match": "FALSE",
        "Cnt": 2109
    },
    {
        "Text": "This box contains five apples",
        "Match": "FALSE",
        "Cnt": 2110
    },
    {
        "Text": "This problem is hard to solve",
        "Match": "FALSE",
        "Cnt": 2111
    },
    {
        "Text": "This river is one mile across",
        "Match": "FALSE",
        "Cnt": 2112
    },
    {
        "Text": "This rule applies to you, too",
        "Match": "FALSE",
        "Cnt": 2113
    },
    {
        "Text": "This school has many students",
        "Match": "FALSE",
        "Cnt": 2114
    },
    {
        "Text": "Today is my sister's birthday",
        "Match": "FALSE",
        "Cnt": 2115
    },
    {
        "Text": "Today is my sister's birthday",
        "Match": "FALSE",
        "Cnt": 2116
    },
    {
        "Text": "We were surprised at the news",
        "Match": "FALSE",
        "Cnt": 2117
    },
    {
        "Text": "What is done cannot be undone",
        "Match": "FALSE",
        "Cnt": 2118
    },
    {
        "Text": "What is done cannot be undone",
        "Match": "FALSE",
        "Cnt": 2119
    },
    {
        "Text": "What is the name of this bird?",
        "Match": "FALSE",
        "Cnt": 2120
    },
    {
        "Text": "What kind of work will you do?",
        "Match": "FALSE",
        "Cnt": 2121
    },
    {
        "Text": "What's your home phone number?",
        "Match": "FALSE",
        "Cnt": 2122
    },
    {
        "Text": "When do you usually go to bed?",
        "Match": "FALSE",
        "Cnt": 2123
    },
    {
        "Text": "Who was the letter written to?",
        "Match": "FALSE",
        "Cnt": 2124
    },
    {
        "Text": "Why didn't she come yesterday?",
        "Match": "FALSE",
        "Cnt": 2125
    },
    {
        "Text": "You cannot park your car here",
        "Match": "FALSE",
        "Cnt": 2126
    },
    {
        "Text": "You may sit down on the chair",
        "Match": "FALSE",
        "Cnt": 2127
    },
    {
        "Text": "Your team is better than ours",
        "Match": "FALSE",
        "Cnt": 2128
    },
    {
        "Text": "What time is it?\" \"It's 3:20.",
        "Match": "FALSE",
        "Cnt": 2129
    },
    {
        "Text": "A fire broke out near my house",
        "Match": "FALSE",
        "Cnt": 2130
    },
    {
        "Text": "Are you going to ask me or not?",
        "Match": "FALSE",
        "Cnt": 2131
    },
    {
        "Text": "Both he and his wife have cars",
        "Match": "FALSE",
        "Cnt": 2132
    },
    {
        "Text": "Both of my sisters are married",
        "Match": "FALSE",
        "Cnt": 2133
    },
    {
        "Text": "Business is so slow these days",
        "Match": "FALSE",
        "Cnt": 2134
    },
    {
        "Text": "Can I have the key now, please?",
        "Match": "FALSE",
        "Cnt": 2135
    },
    {
        "Text": "Dad is shaving in the bathroom",
        "Match": "FALSE",
        "Cnt": 2136
    },
    {
        "Text": "Did he come by bus or by train?",
        "Match": "FALSE",
        "Cnt": 2137
    },
    {
        "Text": "Do you have a room of your own?",
        "Match": "FALSE",
        "Cnt": 2138
    },
    {
        "Text": "Do you have one that's cheaper?",
        "Match": "FALSE",
        "Cnt": 2139
    },
    {
        "Text": "Do you know how to drive a car?",
        "Match": "FALSE",
        "Cnt": 2140
    },
    {
        "Text": "Do you know how to drive a car?",
        "Match": "FALSE",
        "Cnt": 2141
    },
    {
        "Text": "Do you know how to drive a car?",
        "Match": "FALSE",
        "Cnt": 2142
    },
    {
        "Text": "Does anyone here speak English?",
        "Match": "FALSE",
        "Cnt": 2143
    },
    {
        "Text": "English is spoken in Australia",
        "Match": "FALSE",
        "Cnt": 2144
    },
    {
        "Text": "Excuse me, but can you help me?",
        "Match": "FALSE",
        "Cnt": 2145
    },
    {
        "Text": "Few people know about the plan",
        "Match": "FALSE",
        "Cnt": 2146
    },
    {
        "Text": "Fighting won't settle anything",
        "Match": "FALSE",
        "Cnt": 2147
    },
    {
        "Text": "Flying a kite can be dangerous",
        "Match": "FALSE",
        "Cnt": 2148
    },
    {
        "Text": "Give me your attention, please",
        "Match": "FALSE",
        "Cnt": 2149
    },
    {
        "Text": "He has blue eyes and fair hair",
        "Match": "FALSE",
        "Cnt": 2150
    },
    {
        "Text": "He is anxious about the result",
        "Match": "FALSE",
        "Cnt": 2151
    },
    {
        "Text": "He took a picture of the koala",
        "Match": "FALSE",
        "Cnt": 2152
    },
    {
        "Text": "He walks his dog every morning",
        "Match": "FALSE",
        "Cnt": 2153
    },
    {
        "Text": "His absence was due to illness",
        "Match": "FALSE",
        "Cnt": 2154
    },
    {
        "Text": "His behavior is very odd today",
        "Match": "FALSE",
        "Cnt": 2155
    },
    {
        "Text": "How do you interpret this poem?",
        "Match": "FALSE",
        "Cnt": 2156
    },
    {
        "Text": "How do you interpret this poem?",
        "Match": "FALSE",
        "Cnt": 2157
    },
    {
        "Text": "How do you like your eggs done?",
        "Match": "FALSE",
        "Cnt": 2158
    },
    {
        "Text": "I am thinking of changing jobs",
        "Match": "FALSE",
        "Cnt": 2159
    },
    {
        "Text": "I bet five pounds on the horse",
        "Match": "FALSE",
        "Cnt": 2160
    },
    {
        "Text": "I did it the way he told me to",
        "Match": "FALSE",
        "Cnt": 2161
    },
    {
        "Text": "I don't know when he will come",
        "Match": "FALSE",
        "Cnt": 2162
    },
    {
        "Text": "I have a bone to pick with you",
        "Match": "FALSE",
        "Cnt": 2163
    },
    {
        "Text": "I have not seen him since then",
        "Match": "FALSE",
        "Cnt": 2164
    },
    {
        "Text": "I left the keys with my wallet",
        "Match": "FALSE",
        "Cnt": 2165
    },
    {
        "Text": "I motioned for her to sit down",
        "Match": "FALSE",
        "Cnt": 2166
    },
    {
        "Text": "I must have left it on the bus",
        "Match": "FALSE",
        "Cnt": 2167
    },
    {
        "Text": "I take a bath almost every day",
        "Match": "FALSE",
        "Cnt": 2168
    },
    {
        "Text": "I want to have a cup of coffee",
        "Match": "FALSE",
        "Cnt": 2169
    },
    {
        "Text": "I will give you a large folder",
        "Match": "FALSE",
        "Cnt": 2170
    },
    {
        "Text": "I'm going to meet him tomorrow",
        "Match": "FALSE",
        "Cnt": 2171
    },
    {
        "Text": "I've never met such a kind man",
        "Match": "FALSE",
        "Cnt": 2172
    },
    {
        "Text": "I've worked here for ten years",
        "Match": "FALSE",
        "Cnt": 2173
    },
    {
        "Text": "Is it possible to borrow money?",
        "Match": "FALSE",
        "Cnt": 2174
    },
    {
        "Text": "It is no use worrying about it",
        "Match": "FALSE",
        "Cnt": 2175
    },
    {
        "Text": "It took me a while to find Tom",
        "Match": "FALSE",
        "Cnt": 2176
    },
    {
        "Text": "Let's meet here again tomorrow",
        "Match": "FALSE",
        "Cnt": 2177
    },
    {
        "Text": "Let's take a rest in the shade",
        "Match": "FALSE",
        "Cnt": 2178
    },
    {
        "Text": "Mary is interested in politics",
        "Match": "FALSE",
        "Cnt": 2179
    },
    {
        "Text": "May I leave this book with you?",
        "Match": "FALSE",
        "Cnt": 2180
    },
    {
        "Text": "My hobby is playing the guitar",
        "Match": "FALSE",
        "Cnt": 2181
    },
    {
        "Text": "Physics is my favorite subject",
        "Match": "FALSE",
        "Cnt": 2182
    },
    {
        "Text": "Please speak in a louder voice",
        "Match": "FALSE",
        "Cnt": 2183
    },
    {
        "Text": "Read as many books as possible",
        "Match": "FALSE",
        "Cnt": 2184
    },
    {
        "Text": "Remove your shirt and lie down",
        "Match": "FALSE",
        "Cnt": 2185
    },
    {
        "Text": "She always tries something new",
        "Match": "FALSE",
        "Cnt": 2186
    },
    {
        "Text": "She cooked us a wonderful meal",
        "Match": "FALSE",
        "Cnt": 2187
    },
    {
        "Text": "She helped me pack my suitcase",
        "Match": "FALSE",
        "Cnt": 2188
    },
    {
        "Text": "She is a woman of great beauty",
        "Match": "FALSE",
        "Cnt": 2189
    },
    {
        "Text": "She is always dressed in black",
        "Match": "FALSE",
        "Cnt": 2190
    },
    {
        "Text": "She is appearing on TV tonight",
        "Match": "FALSE",
        "Cnt": 2191
    },
    {
        "Text": "She warned him not to go alone",
        "Match": "FALSE",
        "Cnt": 2192
    },
    {
        "Text": "She's a beauty from a distance",
        "Match": "FALSE",
        "Cnt": 2193
    },
    {
        "Text": "Someone has cut my kite string",
        "Match": "FALSE",
        "Cnt": 2194
    },
    {
        "Text": "Such a thing occurs frequently",
        "Match": "FALSE",
        "Cnt": 2195
    },
    {
        "Text": "The bird on the roof is a crow",
        "Match": "FALSE",
        "Cnt": 2196
    },
    {
        "Text": "The car raised a cloud of dust",
        "Match": "FALSE",
        "Cnt": 2197
    },
    {
        "Text": "The children were flying kites",
        "Match": "FALSE",
        "Cnt": 2198
    },
    {
        "Text": "The deer was running by itself",
        "Match": "FALSE",
        "Cnt": 2199
    },
    {
        "Text": "The dog kept barking all night",
        "Match": "FALSE",
        "Cnt": 2200
    },
    {
        "Text": "The earth moves around the sun",
        "Match": "FALSE",
        "Cnt": 2201
    },
    {
        "Text": "The investigation is under way",
        "Match": "FALSE",
        "Cnt": 2202
    },
    {
        "Text": "The men went hunting for lions",
        "Match": "FALSE",
        "Cnt": 2203
    },
    {
        "Text": "The plane crash took 200 lives",
        "Match": "FALSE",
        "Cnt": 2204
    },
    {
        "Text": "The plane will arrive at three",
        "Match": "FALSE",
        "Cnt": 2205
    },
    {
        "Text": "The shop carried leather goods",
        "Match": "FALSE",
        "Cnt": 2206
    },
    {
        "Text": "Their wedding will be tomorrow",
        "Match": "FALSE",
        "Cnt": 2207
    },
    {
        "Text": "There are no towels in room 15",
        "Match": "FALSE",
        "Cnt": 2208
    },
    {
        "Text": "There used to be a church here",
        "Match": "FALSE",
        "Cnt": 2209
    },
    {
        "Text": "These shoes are too big for me",
        "Match": "FALSE",
        "Cnt": 2210
    },
    {
        "Text": "They went on talking for hours",
        "Match": "FALSE",
        "Cnt": 2211
    },
    {
        "Text": "They went out of sight at last",
        "Match": "FALSE",
        "Cnt": 2212
    },
    {
        "Text": "This is a picture of my sister",
        "Match": "FALSE",
        "Cnt": 2213
    },
    {
        "Text": "This is mine, and that's yours",
        "Match": "FALSE",
        "Cnt": 2214
    },
    {
        "Text": "This medicine will do you good!",
        "Match": "FALSE",
        "Cnt": 2215
    },
    {
        "Text": "This train is bound for Boston",
        "Match": "FALSE",
        "Cnt": 2216
    },
    {
        "Text": "Today is my sixteenth birthday",
        "Match": "FALSE",
        "Cnt": 2217
    },
    {
        "Text": "We are anxious for world peace",
        "Match": "FALSE",
        "Cnt": 2218
    },
    {
        "Text": "We are sorry we can't help you",
        "Match": "FALSE",
        "Cnt": 2219
    },
    {
        "Text": "We cannot do the work in a day",
        "Match": "FALSE",
        "Cnt": 2220
    },
    {
        "Text": "What would you like for supper?",
        "Match": "FALSE",
        "Cnt": 2221
    },
    {
        "Text": "Who is the author of the novel?",
        "Match": "FALSE",
        "Cnt": 2222
    },
    {
        "Text": "Why were you late this morning?",
        "Match": "FALSE",
        "Cnt": 2223
    },
    {
        "Text": "Won't you come to dine with us?",
        "Match": "FALSE",
        "Cnt": 2224
    },
    {
        "Text": "You may take anything you like",
        "Match": "FALSE",
        "Cnt": 2225
    },
    {
        "Text": "You must be back by 10 o'clock",
        "Match": "FALSE",
        "Cnt": 2226
    },
    {
        "Text": "You owe me an apology for that",
        "Match": "FALSE",
        "Cnt": 2227
    },
    {
        "Text": "You should have come yesterday",
        "Match": "FALSE",
        "Cnt": 2228
    },
    {
        "Text": "You should have kept it secret",
        "Match": "FALSE",
        "Cnt": 2229
    },
    {
        "Text": "You should have listened to me",
        "Match": "FALSE",
        "Cnt": 2230
    },
    {
        "Text": "You should have seen the movie",
        "Match": "FALSE",
        "Cnt": 2231
    },
    {
        "Text": "A good idea suddenly struck her",
        "Match": "FALSE",
        "Cnt": 2232
    },
    {
        "Text": "All the students look up to him",
        "Match": "FALSE",
        "Cnt": 2233
    },
    {
        "Text": "Are you the owner of this house?",
        "Match": "FALSE",
        "Cnt": 2234
    },
    {
        "Text": "At last, he solved the question",
        "Match": "FALSE",
        "Cnt": 2235
    },
    {
        "Text": "Australia exports a lot of wool",
        "Match": "FALSE",
        "Cnt": 2236
    },
    {
        "Text": "Believe it or not, that is true",
        "Match": "FALSE",
        "Cnt": 2237
    },
    {
        "Text": "China is much bigger than Japan",
        "Match": "FALSE",
        "Cnt": 2238
    },
    {
        "Text": "China is much larger than Japan",
        "Match": "FALSE",
        "Cnt": 2239
    },
    {
        "Text": "Do you think that fish can hear?",
        "Match": "FALSE",
        "Cnt": 2240
    },
    {
        "Text": "English is the world's language",
        "Match": "FALSE",
        "Cnt": 2241
    },
    {
        "Text": "English is the world's language",
        "Match": "FALSE",
        "Cnt": 2242
    },
    {
        "Text": "Even children can understand it",
        "Match": "FALSE",
        "Cnt": 2243
    },
    {
        "Text": "Everything is all right at home",
        "Match": "FALSE",
        "Cnt": 2244
    },
    {
        "Text": "Finish this as soon as possible",
        "Match": "FALSE",
        "Cnt": 2245
    },
    {
        "Text": "Finish this as soon as possible",
        "Match": "FALSE",
        "Cnt": 2246
    },
    {
        "Text": "Fresh vegetables promote health",
        "Match": "FALSE",
        "Cnt": 2247
    },
    {
        "Text": "Fresh vegetables promote health",
        "Match": "FALSE",
        "Cnt": 2248
    },
    {
        "Text": "He is afraid of making mistakes",
        "Match": "FALSE",
        "Cnt": 2249
    },
    {
        "Text": "He looked back and smiled at me",
        "Match": "FALSE",
        "Cnt": 2250
    },
    {
        "Text": "He was buried in this graveyard",
        "Match": "FALSE",
        "Cnt": 2251
    },
    {
        "Text": "He was buried in this graveyard",
        "Match": "FALSE",
        "Cnt": 2252
    },
    {
        "Text": "I am nothing but a poor peasant",
        "Match": "FALSE",
        "Cnt": 2253
    },
    {
        "Text": "I bet ten dollars on that horse",
        "Match": "FALSE",
        "Cnt": 2254
    },
    {
        "Text": "I clean up my room every Sunday",
        "Match": "FALSE",
        "Cnt": 2255
    },
    {
        "Text": "I have some stuff to do at home",
        "Match": "FALSE",
        "Cnt": 2256
    },
    {
        "Text": "I hope he won't be disappointed",
        "Match": "FALSE",
        "Cnt": 2257
    },
    {
        "Text": "I remember when I first saw you",
        "Match": "FALSE",
        "Cnt": 2258
    },
    {
        "Text": "I wake him at six every morning",
        "Match": "FALSE",
        "Cnt": 2259
    },
    {
        "Text": "I want you to keep your promise",
        "Match": "FALSE",
        "Cnt": 2260
    },
    {
        "Text": "I will go there in place of you",
        "Match": "FALSE",
        "Cnt": 2261
    },
    {
        "Text": "I would like to meet his father",
        "Match": "FALSE",
        "Cnt": 2262
    },
    {
        "Text": "I'm going to tell you something",
        "Match": "FALSE",
        "Cnt": 2263
    },
    {
        "Text": "I'm going to tell you something",
        "Match": "FALSE",
        "Cnt": 2264
    },
    {
        "Text": "I'm gonna have to call you back",
        "Match": "FALSE",
        "Cnt": 2265
    },
    {
        "Text": "It is very cold today, isn't it?",
        "Match": "FALSE",
        "Cnt": 2266
    },
    {
        "Text": "It isn't raining much this year",
        "Match": "FALSE",
        "Cnt": 2267
    },
    {
        "Text": "It was raining heavily in Osaka",
        "Match": "FALSE",
        "Cnt": 2268
    },
    {
        "Text": "May I see your passport, please?",
        "Match": "FALSE",
        "Cnt": 2269
    },
    {
        "Text": "My father hates the summer heat",
        "Match": "FALSE",
        "Cnt": 2270
    },
    {
        "Text": "My watch isn't working properly",
        "Match": "FALSE",
        "Cnt": 2271
    },
    {
        "Text": "Perhaps he will never be famous",
        "Match": "FALSE",
        "Cnt": 2272
    },
    {
        "Text": "Please give me a glass of water",
        "Match": "FALSE",
        "Cnt": 2273
    },
    {
        "Text": "Please wait here until he comes",
        "Match": "FALSE",
        "Cnt": 2274
    },
    {
        "Text": "She bought two pounds of butter",
        "Match": "FALSE",
        "Cnt": 2275
    },
    {
        "Text": "She gazed at me for a long time",
        "Match": "FALSE",
        "Cnt": 2276
    },
    {
        "Text": "She got off at the next station",
        "Match": "FALSE",
        "Cnt": 2277
    },
    {
        "Text": "She left the table after dinner",
        "Match": "FALSE",
        "Cnt": 2278
    },
    {
        "Text": "She lives in an apartment alone",
        "Match": "FALSE",
        "Cnt": 2279
    },
    {
        "Text": "She saved money for a rainy day",
        "Match": "FALSE",
        "Cnt": 2280
    },
    {
        "Text": "She tried in vain to please him",
        "Match": "FALSE",
        "Cnt": 2281
    },
    {
        "Text": "Swimming here is very dangerous",
        "Match": "FALSE",
        "Cnt": 2282
    },
    {
        "Text": "Tell whoever comes that I'm out",
        "Match": "FALSE",
        "Cnt": 2283
    },
    {
        "Text": "The boy ran away when he saw me",
        "Match": "FALSE",
        "Cnt": 2284
    },
    {
        "Text": "The clock has just struck three",
        "Match": "FALSE",
        "Cnt": 2285
    },
    {
        "Text": "The dictionary is close at hand",
        "Match": "FALSE",
        "Cnt": 2286
    },
    {
        "Text": "The house is said to be haunted",
        "Match": "FALSE",
        "Cnt": 2287
    },
    {
        "Text": "The kite got caught in the tree",
        "Match": "FALSE",
        "Cnt": 2288
    },
    {
        "Text": "The rumor turned out to be true",
        "Match": "FALSE",
        "Cnt": 2289
    },
    {
        "Text": "The train came to a smooth stop",
        "Match": "FALSE",
        "Cnt": 2290
    },
    {
        "Text": "The water was cut off yesterday",
        "Match": "FALSE",
        "Cnt": 2291
    },
    {
        "Text": "There are few, if any, such men",
        "Match": "FALSE",
        "Cnt": 2292
    },
    {
        "Text": "There is always something to do",
        "Match": "FALSE",
        "Cnt": 2293
    },
    {
        "Text": "They abandoned the sinking ship",
        "Match": "FALSE",
        "Cnt": 2294
    },
    {
        "Text": "They abandoned the sinking ship",
        "Match": "FALSE",
        "Cnt": 2295
    },
    {
        "Text": "They are discussing the problem",
        "Match": "FALSE",
        "Cnt": 2296
    },
    {
        "Text": "To what degree can we trust him?",
        "Match": "FALSE",
        "Cnt": 2297
    },
    {
        "Text": "Try to jump as high as possible",
        "Match": "FALSE",
        "Cnt": 2298
    },
    {
        "Text": "Two crows are flying in the sky",
        "Match": "FALSE",
        "Cnt": 2299
    },
    {
        "Text": "Unless it rains, I will go, too",
        "Match": "FALSE",
        "Cnt": 2300
    },
    {
        "Text": "We can hear the ocean from here",
        "Match": "FALSE",
        "Cnt": 2301
    },
    {
        "Text": "We have eaten there three times",
        "Match": "FALSE",
        "Cnt": 2302
    },
    {
        "Text": "We hurried to the train station",
        "Match": "FALSE",
        "Cnt": 2303
    },
    {
        "Text": "We saw the child get on the bus",
        "Match": "FALSE",
        "Cnt": 2304
    },
    {
        "Text": "We'll cross the river in a boat",
        "Match": "FALSE",
        "Cnt": 2305
    },
    {
        "Text": "What did you do with my baggage?",
        "Match": "FALSE",
        "Cnt": 2306
    },
    {
        "Text": "What is the population of India?",
        "Match": "FALSE",
        "Cnt": 2307
    },
    {
        "Text": "What is the population of India?",
        "Match": "FALSE",
        "Cnt": 2308
    },
    {
        "Text": "What the newspapers say is true",
        "Match": "FALSE",
        "Cnt": 2309
    },
    {
        "Text": "Who is the author of this story?",
        "Match": "FALSE",
        "Cnt": 2310
    },
    {
        "Text": "Why did you turn down his offer?",
        "Match": "FALSE",
        "Cnt": 2311
    },
    {
        "Text": "Why didn't you go to the office?",
        "Match": "FALSE",
        "Cnt": 2312
    },
    {
        "Text": "Will you turn on the television?",
        "Match": "FALSE",
        "Cnt": 2313
    },
    {
        "Text": "Wipe your hands with this towel",
        "Match": "FALSE",
        "Cnt": 2314
    },
    {
        "Text": "Would you like to dance with me?",
        "Match": "FALSE",
        "Cnt": 2315
    },
    {
        "Text": "Would you like to dance with me?",
        "Match": "FALSE",
        "Cnt": 2316
    },
    {
        "Text": "You should conform to the rules",
        "Match": "FALSE",
        "Cnt": 2317
    },
    {
        "Text": "Your bicycle is similar to mine",
        "Match": "FALSE",
        "Cnt": 2318
    },
    {
        "Text": "Let's play tennis.\" \"Yes let's.",
        "Match": "FALSE",
        "Cnt": 2319
    },
    {
        "Text": "A rope was thrown into the water",
        "Match": "FALSE",
        "Cnt": 2320
    },
    {
        "Text": "Do you go there by bus or by car?",
        "Match": "FALSE",
        "Cnt": 2321
    },
    {
        "Text": "Do you have brothers and sisters?",
        "Match": "FALSE",
        "Cnt": 2322
    },
    {
        "Text": "Don't worry",
        "Match": "FALSE",
        "Cnt": 2323
    },
    {
        "Text": "He called me up almost every day",
        "Match": "FALSE",
        "Cnt": 2324
    },
    {
        "Text": "He cannot answer their questions",
        "Match": "FALSE",
        "Cnt": 2325
    },
    {
        "Text": "He explained his plans in detail",
        "Match": "FALSE",
        "Cnt": 2326
    },
    {
        "Text": "He has his hair cut once a month",
        "Match": "FALSE",
        "Cnt": 2327
    },
    {
        "Text": "He hasn't written the letter yet",
        "Match": "FALSE",
        "Cnt": 2328
    },
    {
        "Text": "He is always losing his umbrella",
        "Match": "FALSE",
        "Cnt": 2329
    },
    {
        "Text": "He may be rich, but he is stingy",
        "Match": "FALSE",
        "Cnt": 2330
    },
    {
        "Text": "He pressed me for a prompt reply",
        "Match": "FALSE",
        "Cnt": 2331
    },
    {
        "Text": "He reads the paper every morning",
        "Match": "FALSE",
        "Cnt": 2332
    },
    {
        "Text": "He was killed by a single bullet",
        "Match": "FALSE",
        "Cnt": 2333
    },
    {
        "Text": "He weighed the stone in his hand",
        "Match": "FALSE",
        "Cnt": 2334
    },
    {
        "Text": "He went to India by way of Japan",
        "Match": "FALSE",
        "Cnt": 2335
    },
    {
        "Text": "How old might his grandfather be?",
        "Match": "FALSE",
        "Cnt": 2336
    },
    {
        "Text": "Hurry up, or you'll miss the bus",
        "Match": "FALSE",
        "Cnt": 2337
    },
    {
        "Text": "I am ashamed of having been lazy",
        "Match": "FALSE",
        "Cnt": 2338
    },
    {
        "Text": "I didn't know what to say to him",
        "Match": "FALSE",
        "Cnt": 2339
    },
    {
        "Text": "I don't know how, but Tom did it",
        "Match": "FALSE",
        "Cnt": 2340
    },
    {
        "Text": "I don't know how, but you did it",
        "Match": "FALSE",
        "Cnt": 2341
    },
    {
        "Text": "I had a strange dream last night",
        "Match": "FALSE",
        "Cnt": 2342
    },
    {
        "Text": "I had to help with the housework",
        "Match": "FALSE",
        "Cnt": 2343
    },
    {
        "Text": "I have an important call to make",
        "Match": "FALSE",
        "Cnt": 2344
    },
    {
        "Text": "I have no place to sleep tonight",
        "Match": "FALSE",
        "Cnt": 2345
    },
    {
        "Text": "I have not finished the task yet",
        "Match": "FALSE",
        "Cnt": 2346
    },
    {
        "Text": "I know nothing whatever about it",
        "Match": "FALSE",
        "Cnt": 2347
    },
    {
        "Text": "I meet him once every six months",
        "Match": "FALSE",
        "Cnt": 2348
    },
    {
        "Text": "I think the train will come soon",
        "Match": "FALSE",
        "Cnt": 2349
    },
    {
        "Text": "I want to go to America some day",
        "Match": "FALSE",
        "Cnt": 2350
    },
    {
        "Text": "I want to study abroad next year",
        "Match": "FALSE",
        "Cnt": 2351
    },
    {
        "Text": "I was taking a bath when he came",
        "Match": "FALSE",
        "Cnt": 2352
    },
    {
        "Text": "I went there because I wanted to",
        "Match": "FALSE",
        "Cnt": 2353
    },
    {
        "Text": "I wrote a love letter last night",
        "Match": "FALSE",
        "Cnt": 2354
    },
    {
        "Text": "I'd like to have a word with you",
        "Match": "FALSE",
        "Cnt": 2355
    },
    {
        "Text": "I'm looking for a small suitcase",
        "Match": "FALSE",
        "Cnt": 2356
    },
    {
        "Text": "I'm tired of watching television",
        "Match": "FALSE",
        "Cnt": 2357
    },
    {
        "Text": "Is it always a sin to tell a lie?",
        "Match": "FALSE",
        "Cnt": 2358
    },
    {
        "Text": "It is expensive to live in Japan",
        "Match": "FALSE",
        "Cnt": 2359
    },
    {
        "Text": "It is no use asking me for money",
        "Match": "FALSE",
        "Cnt": 2360
    },
    {
        "Text": "It looks like you are from India",
        "Match": "FALSE",
        "Cnt": 2361
    },
    {
        "Text": "It won't take long to do the job",
        "Match": "FALSE",
        "Cnt": 2362
    },
    {
        "Text": "Keep children away from medicine",
        "Match": "FALSE",
        "Cnt": 2363
    },
    {
        "Text": "My boss made me work last Sunday",
        "Match": "FALSE",
        "Cnt": 2364
    },
    {
        "Text": "My father can speak English well",
        "Match": "FALSE",
        "Cnt": 2365
    },
    {
        "Text": "My father's hair has grown white",
        "Match": "FALSE",
        "Cnt": 2366
    },
    {
        "Text": "My hobby is visiting old temples",
        "Match": "FALSE",
        "Cnt": 2367
    },
    {
        "Text": "Oh, no! We're running out of gas",
        "Match": "FALSE",
        "Cnt": 2368
    },
    {
        "Text": "One billion people speak English",
        "Match": "FALSE",
        "Cnt": 2369
    },
    {
        "Text": "Our class consists of fifty boys",
        "Match": "FALSE",
        "Cnt": 2370
    },
    {
        "Text": "Our class consists of fifty boys",
        "Match": "FALSE",
        "Cnt": 2371
    },
    {
        "Text": "Our meeting was quite accidental",
        "Match": "FALSE",
        "Cnt": 2372
    },
    {
        "Text": "Please pardon me for coming late",
        "Match": "FALSE",
        "Cnt": 2373
    },
    {
        "Text": "School begins at half past eight",
        "Match": "FALSE",
        "Cnt": 2374
    },
    {
        "Text": "She asked him to raise the funds",
        "Match": "FALSE",
        "Cnt": 2375
    },
    {
        "Text": "She didn't give me my money back",
        "Match": "FALSE",
        "Cnt": 2376
    },
    {
        "Text": "She gladly accepted his proposal",
        "Match": "FALSE",
        "Cnt": 2377
    },
    {
        "Text": "She is poor, but she looks happy",
        "Match": "FALSE",
        "Cnt": 2378
    },
    {
        "Text": "She is too young to go to school",
        "Match": "FALSE",
        "Cnt": 2379
    },
    {
        "Text": "She is two years younger than me",
        "Match": "FALSE",
        "Cnt": 2380
    },
    {
        "Text": "She remained single all her life",
        "Match": "FALSE",
        "Cnt": 2381
    },
    {
        "Text": "She reproached me for being lazy",
        "Match": "FALSE",
        "Cnt": 2382
    },
    {
        "Text": "She went to Paris to study music",
        "Match": "FALSE",
        "Cnt": 2383
    },
    {
        "Text": "Summer is the season I like best",
        "Match": "FALSE",
        "Cnt": 2384
    },
    {
        "Text": "That box is bigger than this one",
        "Match": "FALSE",
        "Cnt": 2385
    },
    {
        "Text": "The boy stripped off his clothes",
        "Match": "FALSE",
        "Cnt": 2386
    },
    {
        "Text": "The conference will end tomorrow",
        "Match": "FALSE",
        "Cnt": 2387
    },
    {
        "Text": "The girl was aware of the danger",
        "Match": "FALSE",
        "Cnt": 2388
    },
    {
        "Text": "The history class starts at nine",
        "Match": "FALSE",
        "Cnt": 2389
    },
    {
        "Text": "The rumor is true to some extent",
        "Match": "FALSE",
        "Cnt": 2390
    },
    {
        "Text": "The shooting started around noon",
        "Match": "FALSE",
        "Cnt": 2391
    },
    {
        "Text": "The telephone rang several times",
        "Match": "FALSE",
        "Cnt": 2392
    },
    {
        "Text": "The top of that mountain is flat",
        "Match": "FALSE",
        "Cnt": 2393
    },
    {
        "Text": "There was a strong wind that day",
        "Match": "FALSE",
        "Cnt": 2394
    },
    {
        "Text": "These trees were planted by them",
        "Match": "FALSE",
        "Cnt": 2395
    },
    {
        "Text": "They gave us very little trouble",
        "Match": "FALSE",
        "Cnt": 2396
    },
    {
        "Text": "They were scolded by the teacher",
        "Match": "FALSE",
        "Cnt": 2397
    },
    {
        "Text": "They will get married next month",
        "Match": "FALSE",
        "Cnt": 2398
    },
    {
        "Text": "This book contains many pictures",
        "Match": "FALSE",
        "Cnt": 2399
    },
    {
        "Text": "This book is older than that one",
        "Match": "FALSE",
        "Cnt": 2400
    },
    {
        "Text": "This is what I found in the cave",
        "Match": "FALSE",
        "Cnt": 2401
    },
    {
        "Text": "This tie doesn't go with my suit",
        "Match": "FALSE",
        "Cnt": 2402
    },
    {
        "Text": "We stayed at a hotel by the lake",
        "Match": "FALSE",
        "Cnt": 2403
    },
    {
        "Text": "We went for a walk in the forest",
        "Match": "FALSE",
        "Cnt": 2404
    },
    {
        "Text": "What do you do in your free time?",
        "Match": "FALSE",
        "Cnt": 2405
    },
    {
        "Text": "What was his motive for doing it?",
        "Match": "FALSE",
        "Cnt": 2406
    },
    {
        "Text": "When do you usually get off work?",
        "Match": "FALSE",
        "Cnt": 2407
    },
    {
        "Text": "When will you get ready to leave?",
        "Match": "FALSE",
        "Cnt": 2408
    },
    {
        "Text": "Who is to blame for the accident?",
        "Match": "FALSE",
        "Cnt": 2409
    },
    {
        "Text": "Will you go to the party tonight?",
        "Match": "FALSE",
        "Cnt": 2410
    },
    {
        "Text": "Will you have another cup of tea?",
        "Match": "FALSE",
        "Cnt": 2411
    },
    {
        "Text": "Will you sing me a Beatles' song?",
        "Match": "FALSE",
        "Cnt": 2412
    },
    {
        "Text": "You didn't have to come so early",
        "Match": "FALSE",
        "Cnt": 2413
    },
    {
        "Text": "You don't have to chat with them",
        "Match": "FALSE",
        "Cnt": 2414
    },
    {
        "Text": "You must get rid of such a habit",
        "Match": "FALSE",
        "Cnt": 2415
    },
    {
        "Text": "A man like that gets on my nerves",
        "Match": "FALSE",
        "Cnt": 2416
    },
    {
        "Text": "A squirrel hid among the branches",
        "Match": "FALSE",
        "Cnt": 2417
    },
    {
        "Text": "Almost all the leaves have fallen",
        "Match": "FALSE",
        "Cnt": 2418
    },
    {
        "Text": "At last, he realized his mistakes",
        "Match": "FALSE",
        "Cnt": 2419
    },
    {
        "Text": "Can you tell me what size this is?",
        "Match": "FALSE",
        "Cnt": 2420
    },
    {
        "Text": "Coincidentally enough, I know him",
        "Match": "FALSE",
        "Cnt": 2421
    },
    {
        "Text": "Do I have to stay in the hospital?",
        "Match": "FALSE",
        "Cnt": 2422
    },
    {
        "Text": "Do you cook by gas or electricity?",
        "Match": "FALSE",
        "Cnt": 2423
    },
    {
        "Text": "Do you know how to use a computer?",
        "Match": "FALSE",
        "Cnt": 2424
    },
    {
        "Text": "Do you know how to use a computer?",
        "Match": "FALSE",
        "Cnt": 2425
    },
    {
        "Text": "Do you want to watch this program?",
        "Match": "FALSE",
        "Cnt": 2426
    },
    {
        "Text": "Elephants live in Asia and Africa",
        "Match": "FALSE",
        "Cnt": 2427
    },
    {
        "Text": "He decided not to go to the party",
        "Match": "FALSE",
        "Cnt": 2428
    },
    {
        "Text": "He didn't go there",
        "Match": "FALSE",
        "Cnt": 2429
    },
    {
        "Text": "He has been to London three times",
        "Match": "FALSE",
        "Cnt": 2430
    },
    {
        "Text": "He hid his sadness behind a smile",
        "Match": "FALSE",
        "Cnt": 2431
    },
    {
        "Text": "He is able to speak ten languages",
        "Match": "FALSE",
        "Cnt": 2432
    },
    {
        "Text": "He lives in that house over there",
        "Match": "FALSE",
        "Cnt": 2433
    },
    {
        "Text": "He used pigeons in his experiment",
        "Match": "FALSE",
        "Cnt": 2434
    },
    {
        "Text": "He will write for hours at a time",
        "Match": "FALSE",
        "Cnt": 2435
    },
    {
        "Text": "He's always running short of cash",
        "Match": "FALSE",
        "Cnt": 2436
    },
    {
        "Text": "I can't buy a book this expensive",
        "Match": "FALSE",
        "Cnt": 2437
    },
    {
        "Text": "I can't put up with his arrogance",
        "Match": "FALSE",
        "Cnt": 2438
    },
    {
        "Text": "I cannot understand what happened",
        "Match": "FALSE",
        "Cnt": 2439
    },
    {
        "Text": "I don't like being made a fool of",
        "Match": "FALSE",
        "Cnt": 2440
    },
    {
        "Text": "I doubt his ability to do the job",
        "Match": "FALSE",
        "Cnt": 2441
    },
    {
        "Text": "I felt hungry after the long walk",
        "Match": "FALSE",
        "Cnt": 2442
    },
    {
        "Text": "I had a letter from her yesterday",
        "Match": "FALSE",
        "Cnt": 2443
    },
    {
        "Text": "I had the good fortune to succeed",
        "Match": "FALSE",
        "Cnt": 2444
    },
    {
        "Text": "I must adjust my watch",
        "Match": "FALSE",
        "Cnt": 2445
    },
    {
        "Text": "I saw a dog swim across the river",
        "Match": "FALSE",
        "Cnt": 2446
    },
    {
        "Text": "I usually get home by six o'clock",
        "Match": "FALSE",
        "Cnt": 2447
    },
    {
        "Text": "I usually get up at eight o'clock",
        "Match": "FALSE",
        "Cnt": 2448
    },
    {
        "Text": "I want you to go to Osaka at once",
        "Match": "FALSE",
        "Cnt": 2449
    },
    {
        "Text": "I was able to win the first prize",
        "Match": "FALSE",
        "Cnt": 2450
    },
    {
        "Text": "I was asked to give you a message",
        "Match": "FALSE",
        "Cnt": 2451
    },
    {
        "Text": "I'm going to the village tomorrow",
        "Match": "FALSE",
        "Cnt": 2452
    },
    {
        "Text": "It happened between eight and ten",
        "Match": "FALSE",
        "Cnt": 2453
    },
    {
        "Text": "It happened between eight and ten",
        "Match": "FALSE",
        "Cnt": 2454
    },
    {
        "Text": "It is better to ignore this point",
        "Match": "FALSE",
        "Cnt": 2455
    },
    {
        "Text": "It seems to me that you are wrong",
        "Match": "FALSE",
        "Cnt": 2456
    },
    {
        "Text": "It was proved that he was a thief",
        "Match": "FALSE",
        "Cnt": 2457
    },
    {
        "Text": "It's important for them to go out",
        "Match": "FALSE",
        "Cnt": 2458
    },
    {
        "Text": "Keep your room as neat as you can",
        "Match": "FALSE",
        "Cnt": 2459
    },
    {
        "Text": "Let me give you a piece of advice",
        "Match": "FALSE",
        "Cnt": 2460
    },
    {
        "Text": "Mary prided herself on her beauty",
        "Match": "FALSE",
        "Cnt": 2461
    },
    {
        "Text": "May we accompany you on your walk?",
        "Match": "FALSE",
        "Cnt": 2462
    },
    {
        "Text": "My friends celebrated my birthday",
        "Match": "FALSE",
        "Cnt": 2463
    },
    {
        "Text": "My hens laid fewer eggs last year",
        "Match": "FALSE",
        "Cnt": 2464
    },
    {
        "Text": "Only a few people didn't go there",
        "Match": "FALSE",
        "Cnt": 2465
    },
    {
        "Text": "Only a few people listened to him",
        "Match": "FALSE",
        "Cnt": 2466
    },
    {
        "Text": "Our meeting rarely starts on time",
        "Match": "FALSE",
        "Cnt": 2467
    },
    {
        "Text": "She has already finished the work",
        "Match": "FALSE",
        "Cnt": 2468
    },
    {
        "Text": "She is as beautiful as her mother",
        "Match": "FALSE",
        "Cnt": 2469
    },
    {
        "Text": "She is ashamed of her old clothes",
        "Match": "FALSE",
        "Cnt": 2470
    },
    {
        "Text": "Smoking will do you a lot of harm",
        "Match": "FALSE",
        "Cnt": 2471
    },
    {
        "Text": "Someday your dream will come true",
        "Match": "FALSE",
        "Cnt": 2472
    },
    {
        "Text": "Stamps are not sold in this store",
        "Match": "FALSE",
        "Cnt": 2473
    },
    {
        "Text": "That bicycle is too small for you",
        "Match": "FALSE",
        "Cnt": 2474
    },
    {
        "Text": "The capital of India is New Delhi",
        "Match": "FALSE",
        "Cnt": 2475
    },
    {
        "Text": "The job must be finished by 3 p",
        "Match": "FALSE",
        "Cnt": 2476
    },
    {
        "Text": "The mountain is covered with snow",
        "Match": "FALSE",
        "Cnt": 2477
    },
    {
        "Text": "The plane took off exactly at six",
        "Match": "FALSE",
        "Cnt": 2478
    },
    {
        "Text": "The rain prevented me from coming",
        "Match": "FALSE",
        "Cnt": 2479
    },
    {
        "Text": "The road is parallel to the river",
        "Match": "FALSE",
        "Cnt": 2480
    },
    {
        "Text": "There are five apples in this box",
        "Match": "FALSE",
        "Cnt": 2481
    },
    {
        "Text": "There is a garden behind my house",
        "Match": "FALSE",
        "Cnt": 2482
    },
    {
        "Text": "There was no one there besides me",
        "Match": "FALSE",
        "Cnt": 2483
    },
    {
        "Text": "There were two murders this month",
        "Match": "FALSE",
        "Cnt": 2484
    },
    {
        "Text": "There were two murders this month",
        "Match": "FALSE",
        "Cnt": 2485
    },
    {
        "Text": "They are willing to learn English",
        "Match": "FALSE",
        "Cnt": 2486
    },
    {
        "Text": "We shared the profit among us all",
        "Match": "FALSE",
        "Cnt": 2487
    },
    {
        "Text": "We should observe the speed limit",
        "Match": "FALSE",
        "Cnt": 2488
    },
    {
        "Text": "We usually have breakfast at 7:30",
        "Match": "FALSE",
        "Cnt": 2489
    },
    {
        "Text": "What movies are playing this week?",
        "Match": "FALSE",
        "Cnt": 2490
    },
    {
        "Text": "What time did your friend go home?",
        "Match": "FALSE",
        "Cnt": 2491
    },
    {
        "Text": "What time do you get up every day?",
        "Match": "FALSE",
        "Cnt": 2492
    },
    {
        "Text": "What time do you get up every day?",
        "Match": "FALSE",
        "Cnt": 2493
    },
    {
        "Text": "What time do you get up every day?",
        "Match": "FALSE",
        "Cnt": 2494
    },
    {
        "Text": "What time will you have breakfast?",
        "Match": "FALSE",
        "Cnt": 2495
    },
    {
        "Text": "When did you get back from London?",
        "Match": "FALSE",
        "Cnt": 2496
    },
    {
        "Text": "Who do you think broke the window?",
        "Match": "FALSE",
        "Cnt": 2497
    },
    {
        "Text": "Will the weather be good tomorrow?",
        "Match": "FALSE",
        "Cnt": 2498
    },
    {
        "Text": "Will you go to America next month?",
        "Match": "FALSE",
        "Cnt": 2499
    },
    {
        "Text": "Would you like another cup of tea?",
        "Match": "FALSE",
        "Cnt": 2500
    },
    {
        "Text": "You had better not read this book",
        "Match": "FALSE",
        "Cnt": 2501
    },
    {
        "Text": "You must keep an eye on the child",
        "Match": "FALSE",
        "Cnt": 2502
    },
    {
        "Text": "You've got nothing to complain of",
        "Match": "FALSE",
        "Cnt": 2503
    },
    {
        "Text": "Your sister can not speak English",
        "Match": "FALSE",
        "Cnt": 2504
    },
    {
        "Text": "A police officer is talking to her",
        "Match": "FALSE",
        "Cnt": 2505
    },
    {
        "Text": "An elephant is a very large animal",
        "Match": "FALSE",
        "Cnt": 2506
    },
    {
        "Text": "Are you sure of her coming on time?",
        "Match": "FALSE",
        "Cnt": 2507
    },
    {
        "Text": "As a matter of fact, I dislike him",
        "Match": "FALSE",
        "Cnt": 2508
    },
    {
        "Text": "Bern is the capital of Switzerland",
        "Match": "FALSE",
        "Cnt": 2509
    },
    {
        "Text": "Could you call again later, please?",
        "Match": "FALSE",
        "Cnt": 2510
    },
    {
        "Text": "Did you hear the news on the radio?",
        "Match": "FALSE",
        "Cnt": 2511
    },
    {
        "Text": "Do you have these shoes in my size?",
        "Match": "FALSE",
        "Cnt": 2512
    },
    {
        "Text": "Do you have these shoes in my size?",
        "Match": "FALSE",
        "Cnt": 2513
    },
    {
        "Text": "Do you like to live in the country?",
        "Match": "FALSE",
        "Cnt": 2514
    },
    {
        "Text": "Don't be afraid of making mistakes",
        "Match": "FALSE",
        "Cnt": 2515
    },
    {
        "Text": "Don't speak ill of your classmates",
        "Match": "FALSE",
        "Cnt": 2516
    },
    {
        "Text": "Every man should learn how to cook",
        "Match": "FALSE",
        "Cnt": 2517
    },
    {
        "Text": "Everybody wants to live in comfort",
        "Match": "FALSE",
        "Cnt": 2518
    },
    {
        "Text": "Few people will admit their faults",
        "Match": "FALSE",
        "Cnt": 2519
    },
    {
        "Text": "He did the reverse of what I asked",
        "Match": "FALSE",
        "Cnt": 2520
    },
    {
        "Text": "He died without having made a will",
        "Match": "FALSE",
        "Cnt": 2521
    },
    {
        "Text": "He doesn't live in my neighborhood",
        "Match": "FALSE",
        "Cnt": 2522
    },
    {
        "Text": "He had nothing to do with the case",
        "Match": "FALSE",
        "Cnt": 2523
    },
    {
        "Text": "He had to go without food for days",
        "Match": "FALSE",
        "Cnt": 2524
    },
    {
        "Text": "He has no sense of right and wrong",
        "Match": "FALSE",
        "Cnt": 2525
    },
    {
        "Text": "He has plenty of money in the bank",
        "Match": "FALSE",
        "Cnt": 2526
    },
    {
        "Text": "He kept us waiting for a long time",
        "Match": "FALSE",
        "Cnt": 2527
    },
    {
        "Text": "He left a large fortune to his son",
        "Match": "FALSE",
        "Cnt": 2528
    },
    {
        "Text": "He put down the rebellion in India",
        "Match": "FALSE",
        "Cnt": 2529
    },
    {
        "Text": "He ran faster than his brother did",
        "Match": "FALSE",
        "Cnt": 2530
    },
    {
        "Text": "He rescued the child from the fire",
        "Match": "FALSE",
        "Cnt": 2531
    },
    {
        "Text": "He speaks English better than I do",
        "Match": "FALSE",
        "Cnt": 2532
    },
    {
        "Text": "How do you like living on your own?",
        "Match": "FALSE",
        "Cnt": 2533
    },
    {
        "Text": "How is it going in the fish market?",
        "Match": "FALSE",
        "Cnt": 2534
    },
    {
        "Text": "How long will it take to get there?",
        "Match": "FALSE",
        "Cnt": 2535
    },
    {
        "Text": "How many books do you read a month?",
        "Match": "FALSE",
        "Cnt": 2536
    },
    {
        "Text": "How many sandwiches are there left?",
        "Match": "FALSE",
        "Cnt": 2537
    },
    {
        "Text": "I am his friend and will remain so",
        "Match": "FALSE",
        "Cnt": 2538
    },
    {
        "Text": "I am married and have two children",
        "Match": "FALSE",
        "Cnt": 2539
    },
    {
        "Text": "I cannot tolerate naughty children",
        "Match": "FALSE",
        "Cnt": 2540
    },
    {
        "Text": "I don't know who wrote this letter",
        "Match": "FALSE",
        "Cnt": 2541
    },
    {
        "Text": "I don't like studying in this heat",
        "Match": "FALSE",
        "Cnt": 2542
    },
    {
        "Text": "I don't think I can wait that long",
        "Match": "FALSE",
        "Cnt": 2543
    },
    {
        "Text": "I doubt the truth of his statement",
        "Match": "FALSE",
        "Cnt": 2544
    },
    {
        "Text": "I fell down the stairs in my haste",
        "Match": "FALSE",
        "Cnt": 2545
    },
    {
        "Text": "I had my brother repair my bicycle",
        "Match": "FALSE",
        "Cnt": 2546
    },
    {
        "Text": "I had nothing to do with the group",
        "Match": "FALSE",
        "Cnt": 2547
    },
    {
        "Text": "I haven't seen him for a long time",
        "Match": "FALSE",
        "Cnt": 2548
    },
    {
        "Text": "I hear that she's a famous actress",
        "Match": "FALSE",
        "Cnt": 2549
    },
    {
        "Text": "I helped my mother wash the dishes",
        "Match": "FALSE",
        "Cnt": 2550
    },
    {
        "Text": "I learned French instead of German",
        "Match": "FALSE",
        "Cnt": 2551
    },
    {
        "Text": "I ordered those books from Germany",
        "Match": "FALSE",
        "Cnt": 2552
    },
    {
        "Text": "I want to know about this mountain",
        "Match": "FALSE",
        "Cnt": 2553
    },
    {
        "Text": "I was able to play piano very well",
        "Match": "FALSE",
        "Cnt": 2554
    },
    {
        "Text": "I wish to go to Paris to study art",
        "Match": "FALSE",
        "Cnt": 2555
    },
    {
        "Text": "I wish to go to Paris to study art",
        "Match": "FALSE",
        "Cnt": 2556
    },
    {
        "Text": "I'm anxious for him to return safe",
        "Match": "FALSE",
        "Cnt": 2557
    },
    {
        "Text": "If I don't do it now, I never will",
        "Match": "FALSE",
        "Cnt": 2558
    },
    {
        "Text": "If I had wings, I would fly to you",
        "Match": "FALSE",
        "Cnt": 2559
    },
    {
        "Text": "It has been fine since last Friday",
        "Match": "FALSE",
        "Cnt": 2560
    },
    {
        "Text": "It is going to rain this afternoon",
        "Match": "FALSE",
        "Cnt": 2561
    },
    {
        "Text": "It seems that everybody likes golf",
        "Match": "FALSE",
        "Cnt": 2562
    },
    {
        "Text": "It shouldn't take long to find Tom",
        "Match": "FALSE",
        "Cnt": 2563
    },
    {
        "Text": "It's more difficult than you think",
        "Match": "FALSE",
        "Cnt": 2564
    },
    {
        "Text": "Learning a foreign language is fun",
        "Match": "FALSE",
        "Cnt": 2565
    },
    {
        "Text": "My brother depends on me for money",
        "Match": "FALSE",
        "Cnt": 2566
    },
    {
        "Text": "My sister is very fond of children",
        "Match": "FALSE",
        "Cnt": 2567
    },
    {
        "Text": "My wife has just cleared the table",
        "Match": "FALSE",
        "Cnt": 2568
    },
    {
        "Text": "Nowadays nobody believes in ghosts",
        "Match": "FALSE",
        "Cnt": 2569
    },
    {
        "Text": "One is tall and the other is short",
        "Match": "FALSE",
        "Cnt": 2570
    },
    {
        "Text": "She accused me of making a mistake",
        "Match": "FALSE",
        "Cnt": 2571
    },
    {
        "Text": "She asked me if I knew her address",
        "Match": "FALSE",
        "Cnt": 2572
    },
    {
        "Text": "She didn't want him to go overseas",
        "Match": "FALSE",
        "Cnt": 2573
    },
    {
        "Text": "She didn't want to speak to anyone",
        "Match": "FALSE",
        "Cnt": 2574
    },
    {
        "Text": "She felt insecure about her future",
        "Match": "FALSE",
        "Cnt": 2575
    },
    {
        "Text": "She felt insecure about her future",
        "Match": "FALSE",
        "Cnt": 2576
    },
    {
        "Text": "She is busy preparing for the trip",
        "Match": "FALSE",
        "Cnt": 2577
    },
    {
        "Text": "She was very surprised at the news",
        "Match": "FALSE",
        "Cnt": 2578
    },
    {
        "Text": "She went to the market once a week",
        "Match": "FALSE",
        "Cnt": 2579
    },
    {
        "Text": "She's in the garden planting roses",
        "Match": "FALSE",
        "Cnt": 2580
    },
    {
        "Text": "Since he was tired, he went to bed",
        "Match": "FALSE",
        "Cnt": 2581
    },
    {
        "Text": "Since you're here, you can help me",
        "Match": "FALSE",
        "Cnt": 2582
    },
    {
        "Text": "Take this medicine every six hours",
        "Match": "FALSE",
        "Cnt": 2583
    },
    {
        "Text": "Teaching English is his profession",
        "Match": "FALSE",
        "Cnt": 2584
    },
    {
        "Text": "The animals in the forest died off",
        "Match": "FALSE",
        "Cnt": 2585
    },
    {
        "Text": "The baby fell asleep in the cradle",
        "Match": "FALSE",
        "Cnt": 2586
    },
    {
        "Text": "The boy has an apple in his pocket",
        "Match": "FALSE",
        "Cnt": 2587
    },
    {
        "Text": "The fat woman was holding a monkey",
        "Match": "FALSE",
        "Cnt": 2588
    },
    {
        "Text": "The hole is about five feet across",
        "Match": "FALSE",
        "Cnt": 2589
    },
    {
        "Text": "The king was deprived of his power",
        "Match": "FALSE",
        "Cnt": 2590
    },
    {
        "Text": "The lion is the king of the jungle",
        "Match": "FALSE",
        "Cnt": 2591
    },
    {
        "Text": "The mystery still remains unsolved",
        "Match": "FALSE",
        "Cnt": 2592
    },
    {
        "Text": "The problem is being discussed now",
        "Match": "FALSE",
        "Cnt": 2593
    },
    {
        "Text": "The storm destroyed the whole town",
        "Match": "FALSE",
        "Cnt": 2594
    },
    {
        "Text": "The storm destroyed the whole town",
        "Match": "FALSE",
        "Cnt": 2595
    },
    {
        "Text": "There is a strange man at the door",
        "Match": "FALSE",
        "Cnt": 2596
    },
    {
        "Text": "These questions are easy to answer",
        "Match": "FALSE",
        "Cnt": 2597
    },
    {
        "Text": "These questions are easy to answer",
        "Match": "FALSE",
        "Cnt": 2598
    },
    {
        "Text": "They are proud of their clever son",
        "Match": "FALSE",
        "Cnt": 2599
    },
    {
        "Text": "They brought trouble on themselves",
        "Match": "FALSE",
        "Cnt": 2600
    },
    {
        "Text": "This is a good newspaper, isn't it?",
        "Match": "FALSE",
        "Cnt": 2601
    },
    {
        "Text": "To make matters worse, he fell ill",
        "Match": "FALSE",
        "Cnt": 2602
    },
    {
        "Text": "Tomorrow, he will land on the moon",
        "Match": "FALSE",
        "Cnt": 2603
    },
    {
        "Text": "We are all eager to know the truth",
        "Match": "FALSE",
        "Cnt": 2604
    },
    {
        "Text": "What do you think she is doing now?",
        "Match": "FALSE",
        "Cnt": 2605
    },
    {
        "Text": "Where should I pick the tickets up?",
        "Match": "FALSE",
        "Cnt": 2606
    },
    {
        "Text": "Why did you come here this morning?",
        "Match": "FALSE",
        "Cnt": 2607
    },
    {
        "Text": "Wooden buildings catch fire easily",
        "Match": "FALSE",
        "Cnt": 2608
    },
    {
        "Text": "Would you mind my opening the door?",
        "Match": "FALSE",
        "Cnt": 2609
    },
    {
        "Text": "You can have this book for nothing",
        "Match": "FALSE",
        "Cnt": 2610
    },
    {
        "Text": "You can't buy that kind of loyalty",
        "Match": "FALSE",
        "Cnt": 2611
    },
    {
        "Text": "You must take his age into account",
        "Match": "FALSE",
        "Cnt": 2612
    },
    {
        "Text": "You should make use of this chance",
        "Match": "FALSE",
        "Cnt": 2613
    },
    {
        "Text": "You should make use of this chance",
        "Match": "FALSE",
        "Cnt": 2614
    },
    {
        "Text": "A hundred years is called a century",
        "Match": "FALSE",
        "Cnt": 2615
    },
    {
        "Text": "According to him, she is not coming",
        "Match": "FALSE",
        "Cnt": 2616
    },
    {
        "Text": "All of a sudden, she began to laugh",
        "Match": "FALSE",
        "Cnt": 2617
    },
    {
        "Text": "All of my kids want to learn French",
        "Match": "FALSE",
        "Cnt": 2618
    },
    {
        "Text": "Are you reading an interesting book?",
        "Match": "FALSE",
        "Cnt": 2619
    },
    {
        "Text": "Are you reading an interesting book?",
        "Match": "FALSE",
        "Cnt": 2620
    },
    {
        "Text": "Are you reading an interesting book?",
        "Match": "FALSE",
        "Cnt": 2621
    },
    {
        "Text": "Are you saying my life is in danger?",
        "Match": "FALSE",
        "Cnt": 2622
    },
    {
        "Text": "Can I extend my stay one more night?",
        "Match": "FALSE",
        "Cnt": 2623
    },
    {
        "Text": "Don't talk about it in front of him",
        "Match": "FALSE",
        "Cnt": 2624
    },
    {
        "Text": "Everybody came to the class on time",
        "Match": "FALSE",
        "Cnt": 2625
    },
    {
        "Text": "Everyone in my family gets up early",
        "Match": "FALSE",
        "Cnt": 2626
    },
    {
        "Text": "Excuse me, is there a toilet nearby?",
        "Match": "FALSE",
        "Cnt": 2627
    },
    {
        "Text": "Few students use pencils these days",
        "Match": "FALSE",
        "Cnt": 2628
    },
    {
        "Text": "God helps those who help themselves",
        "Match": "FALSE",
        "Cnt": 2629
    },
    {
        "Text": "He can both speak and write Russian",
        "Match": "FALSE",
        "Cnt": 2630
    },
    {
        "Text": "He couldn't understand the sentence",
        "Match": "FALSE",
        "Cnt": 2631
    },
    {
        "Text": "He cried as if he were a boy of six",
        "Match": "FALSE",
        "Cnt": 2632
    },
    {
        "Text": "He made up his mind to study abroad",
        "Match": "FALSE",
        "Cnt": 2633
    },
    {
        "Text": "He seemed surprised by my ignorance",
        "Match": "FALSE",
        "Cnt": 2634
    },
    {
        "Text": "He stuck the broken pieces together",
        "Match": "FALSE",
        "Cnt": 2635
    },
    {
        "Text": "He will get better little by little",
        "Match": "FALSE",
        "Cnt": 2636
    },
    {
        "Text": "Her advice to me was to work harder",
        "Match": "FALSE",
        "Cnt": 2637
    },
    {
        "Text": "Her way of talking got on my nerves",
        "Match": "FALSE",
        "Cnt": 2638
    },
    {
        "Text": "Hurry, and you will catch the train",
        "Match": "FALSE",
        "Cnt": 2639
    },
    {
        "Text": "I am a student at Oxford University",
        "Match": "FALSE",
        "Cnt": 2640
    },
    {
        "Text": "I am really pleased with my new car",
        "Match": "FALSE",
        "Cnt": 2641
    },
    {
        "Text": "I buried my dog at the pet cemetery",
        "Match": "FALSE",
        "Cnt": 2642
    },
    {
        "Text": "I don't want to spend more than $10",
        "Match": "FALSE",
        "Cnt": 2643
    },
    {
        "Text": "I never dreamed that you would lose",
        "Match": "FALSE",
        "Cnt": 2644
    },
    {
        "Text": "I visit my grandmother twice a week",
        "Match": "FALSE",
        "Cnt": 2645
    },
    {
        "Text": "I visit my grandmother twice a week",
        "Match": "FALSE",
        "Cnt": 2646
    },
    {
        "Text": "I was in bed all day long yesterday",
        "Match": "FALSE",
        "Cnt": 2647
    },
    {
        "Text": "I will come back to Canada tomorrow",
        "Match": "FALSE",
        "Cnt": 2648
    },
    {
        "Text": "I've studied English for five years",
        "Match": "FALSE",
        "Cnt": 2649
    },
    {
        "Text": "In Japan, all children go to school",
        "Match": "FALSE",
        "Cnt": 2650
    },
    {
        "Text": "Keep an eye on the baby for a while",
        "Match": "FALSE",
        "Cnt": 2651
    },
    {
        "Text": "Let's get together here once a week",
        "Match": "FALSE",
        "Cnt": 2652
    },
    {
        "Text": "My birthday is one month from today",
        "Match": "FALSE",
        "Cnt": 2653
    },
    {
        "Text": "My father usually comes home at six",
        "Match": "FALSE",
        "Cnt": 2654
    },
    {
        "Text": "My father went jogging after dinner",
        "Match": "FALSE",
        "Cnt": 2655
    },
    {
        "Text": "My father works for a power company",
        "Match": "FALSE",
        "Cnt": 2656
    },
    {
        "Text": "No one believes that he is innocent",
        "Match": "FALSE",
        "Cnt": 2657
    },
    {
        "Text": "Opinions vary from person to person",
        "Match": "FALSE",
        "Cnt": 2658
    },
    {
        "Text": "Opinions vary from person to person",
        "Match": "FALSE",
        "Cnt": 2659
    },
    {
        "Text": "She always complains of her teacher",
        "Match": "FALSE",
        "Cnt": 2660
    },
    {
        "Text": "She believes her son is still alive",
        "Match": "FALSE",
        "Cnt": 2661
    },
    {
        "Text": "She talks as if she knew everything",
        "Match": "FALSE",
        "Cnt": 2662
    },
    {
        "Text": "Some day we'll take a trip to India",
        "Match": "FALSE",
        "Cnt": 2663
    },
    {
        "Text": "Some like tea, others prefer coffee",
        "Match": "FALSE",
        "Cnt": 2664
    },
    {
        "Text": "Stars cannot be seen in the daytime",
        "Match": "FALSE",
        "Cnt": 2665
    },
    {
        "Text": "Tell me the name of the ninth month",
        "Match": "FALSE",
        "Cnt": 2666
    },
    {
        "Text": "That's a completely unfounded rumor",
        "Match": "FALSE",
        "Cnt": 2667
    },
    {
        "Text": "The cat slowly approached the mouse",
        "Match": "FALSE",
        "Cnt": 2668
    },
    {
        "Text": "The children were well looked after",
        "Match": "FALSE",
        "Cnt": 2669
    },
    {
        "Text": "The doctor advised him not to smoke",
        "Match": "FALSE",
        "Cnt": 2670
    },
    {
        "Text": "The doctor advised him not to smoke",
        "Match": "FALSE",
        "Cnt": 2671
    },
    {
        "Text": "The law says that all men are equal",
        "Match": "FALSE",
        "Cnt": 2672
    },
    {
        "Text": "The plan has been successful so far",
        "Match": "FALSE",
        "Cnt": 2673
    },
    {
        "Text": "The plane will take off in one hour",
        "Match": "FALSE",
        "Cnt": 2674
    },
    {
        "Text": "The wind scattered the leaves about",
        "Match": "FALSE",
        "Cnt": 2675
    },
    {
        "Text": "There are many old temples in Kyoto",
        "Match": "FALSE",
        "Cnt": 2676
    },
    {
        "Text": "This hat does match the brown dress",
        "Match": "FALSE",
        "Cnt": 2677
    },
    {
        "Text": "We are in agreement on this subject",
        "Match": "FALSE",
        "Cnt": 2678
    },
    {
        "Text": "We managed to swim across the river",
        "Match": "FALSE",
        "Cnt": 2679
    },
    {
        "Text": "We talked to each other for a while",
        "Match": "FALSE",
        "Cnt": 2680
    },
    {
        "Text": "We were all very happy at breakfast",
        "Match": "FALSE",
        "Cnt": 2681
    },
    {
        "Text": "What are you going to do in college?",
        "Match": "FALSE",
        "Cnt": 2682
    },
    {
        "Text": "What do you usually do after dinner?",
        "Match": "FALSE",
        "Cnt": 2683
    },
    {
        "Text": "What was the weather like yesterday?",
        "Match": "FALSE",
        "Cnt": 2684
    },
    {
        "Text": "What would the world do without tea?",
        "Match": "FALSE",
        "Cnt": 2685
    },
    {
        "Text": "Which shoes are you going to put on?",
        "Match": "FALSE",
        "Cnt": 2686
    },
    {
        "Text": "Won't you come and see me next week?",
        "Match": "FALSE",
        "Cnt": 2687
    },
    {
        "Text": "Would you speak more slowly, please?",
        "Match": "FALSE",
        "Cnt": 2688
    },
    {
        "Text": "You are doing very well",
        "Match": "FALSE",
        "Cnt": 2689
    },
    {
        "Text": "You should not leave the baby alone",
        "Match": "FALSE",
        "Cnt": 2690
    },
    {
        "Text": "You've never seen a genuine diamond",
        "Match": "FALSE",
        "Cnt": 2691
    },
    {
        "Text": "A river runs down through the valley",
        "Match": "FALSE",
        "Cnt": 2692
    },
    {
        "Text": "A thick mist covered the countryside",
        "Match": "FALSE",
        "Cnt": 2693
    },
    {
        "Text": "Are there enough chairs to go around?",
        "Match": "FALSE",
        "Cnt": 2694
    },
    {
        "Text": "At times I feel like quitting my job",
        "Match": "FALSE",
        "Cnt": 2695
    },
    {
        "Text": "Buddhism had its beginnings in India",
        "Match": "FALSE",
        "Cnt": 2696
    },
    {
        "Text": "Butter and cheese are made from milk",
        "Match": "FALSE",
        "Cnt": 2697
    },
    {
        "Text": "Classical music is not my cup of tea",
        "Match": "FALSE",
        "Cnt": 2698
    },
    {
        "Text": "Could you bring me another hot towel?",
        "Match": "FALSE",
        "Cnt": 2699
    },
    {
        "Text": "Do you feel any pain in your stomach?",
        "Match": "FALSE",
        "Cnt": 2700
    },
    {
        "Text": "He broke one of the bones in his leg",
        "Match": "FALSE",
        "Cnt": 2701
    },
    {
        "Text": "He is less impatient than his father",
        "Match": "FALSE",
        "Cnt": 2702
    },
    {
        "Text": "He lost no time answering the letter",
        "Match": "FALSE",
        "Cnt": 2703
    },
    {
        "Text": "He put a hand gently on her shoulder",
        "Match": "FALSE",
        "Cnt": 2704
    },
    {
        "Text": "He said he would see me the next day",
        "Match": "FALSE",
        "Cnt": 2705
    },
    {
        "Text": "He was born in a small town in Italy",
        "Match": "FALSE",
        "Cnt": 2706
    },
    {
        "Text": "He was standing at the street corner",
        "Match": "FALSE",
        "Cnt": 2707
    },
    {
        "Text": "He will be a doctor when he grows up",
        "Match": "FALSE",
        "Cnt": 2708
    },
    {
        "Text": "He wiped the sweat from his forehead",
        "Match": "FALSE",
        "Cnt": 2709
    },
    {
        "Text": "His dog follows him wherever he goes",
        "Match": "FALSE",
        "Cnt": 2710
    },
    {
        "Text": "How do you interpret these sentences?",
        "Match": "FALSE",
        "Cnt": 2711
    },
    {
        "Text": "I am doing business on a large scale",
        "Match": "FALSE",
        "Cnt": 2712
    },
    {
        "Text": "I had met her many times before then",
        "Match": "FALSE",
        "Cnt": 2713
    },
    {
        "Text": "I had met him many times before then",
        "Match": "FALSE",
        "Cnt": 2714
    },
    {
        "Text": "I have a friend who lives in England",
        "Match": "FALSE",
        "Cnt": 2715
    },
    {
        "Text": "I have nothing to say on this matter",
        "Match": "FALSE",
        "Cnt": 2716
    },
    {
        "Text": "I helped my father water the flowers",
        "Match": "FALSE",
        "Cnt": 2717
    },
    {
        "Text": "I took the opportunity to visit Rome",
        "Match": "FALSE",
        "Cnt": 2718
    },
    {
        "Text": "I want to know why Tom is doing this",
        "Match": "FALSE",
        "Cnt": 2719
    },
    {
        "Text": "I was amazed at the speed of the car",
        "Match": "FALSE",
        "Cnt": 2720
    },
    {
        "Text": "I was scared that you might leave me",
        "Match": "FALSE",
        "Cnt": 2721
    },
    {
        "Text": "I went to Europe by way of Anchorage",
        "Match": "FALSE",
        "Cnt": 2722
    },
    {
        "Text": "I'm satisfied with my current income",
        "Match": "FALSE",
        "Cnt": 2723
    },
    {
        "Text": "I'm satisfied with my current income",
        "Match": "FALSE",
        "Cnt": 2724
    },
    {
        "Text": "I'm sorry, but I can't hear you well",
        "Match": "FALSE",
        "Cnt": 2725
    },
    {
        "Text": "I'm sorry, but I can't hear you well",
        "Match": "FALSE",
        "Cnt": 2726
    },
    {
        "Text": "I've got a bit of an ache in my back",
        "Match": "FALSE",
        "Cnt": 2727
    },
    {
        "Text": "I've got one brother and two sisters",
        "Match": "FALSE",
        "Cnt": 2728
    },
    {
        "Text": "Imagine that you have a time machine",
        "Match": "FALSE",
        "Cnt": 2729
    },
    {
        "Text": "In those days, I went to bed earlier",
        "Match": "FALSE",
        "Cnt": 2730
    },
    {
        "Text": "It's your turn",
        "Match": "FALSE",
        "Cnt": 2731
    },
    {
        "Text": "She complained to me of his rudeness",
        "Match": "FALSE",
        "Cnt": 2732
    },
    {
        "Text": "She prepared a wonderful meal for us",
        "Match": "FALSE",
        "Cnt": 2733
    },
    {
        "Text": "She was only pretending to be asleep",
        "Match": "FALSE",
        "Cnt": 2734
    },
    {
        "Text": "She went to Paris for the first time",
        "Match": "FALSE",
        "Cnt": 2735
    },
    {
        "Text": "That's Tom's house with the red roof",
        "Match": "FALSE",
        "Cnt": 2736
    },
    {
        "Text": "That's too small to fit on your head",
        "Match": "FALSE",
        "Cnt": 2737
    },
    {
        "Text": "The train is made up of fifteen cars",
        "Match": "FALSE",
        "Cnt": 2738
    },
    {
        "Text": "There's been a lot of rain this year",
        "Match": "FALSE",
        "Cnt": 2739
    },
    {
        "Text": "They dug here and there for treasure",
        "Match": "FALSE",
        "Cnt": 2740
    },
    {
        "Text": "Turn left and you will find the cafe",
        "Match": "FALSE",
        "Cnt": 2741
    },
    {
        "Text": "We are all anxious about your health",
        "Match": "FALSE",
        "Cnt": 2742
    },
    {
        "Text": "We are all anxious about your health",
        "Match": "FALSE",
        "Cnt": 2743
    },
    {
        "Text": "We are to meet in front of his house",
        "Match": "FALSE",
        "Cnt": 2744
    },
    {
        "Text": "What put such an idea into your head?",
        "Match": "FALSE",
        "Cnt": 2745
    },
    {
        "Text": "Who are you going to eat dinner with?",
        "Match": "FALSE",
        "Cnt": 2746
    },
    {
        "Text": "You can see the whole city from here",
        "Match": "FALSE",
        "Cnt": 2747
    },
    {
        "Text": "You should have attended the meeting",
        "Match": "FALSE",
        "Cnt": 2748
    },
    {
        "Text": "A good idea occurred to me last night",
        "Match": "FALSE",
        "Cnt": 2749
    },
    {
        "Text": "At last, the truth became known to us",
        "Match": "FALSE",
        "Cnt": 2750
    },
    {
        "Text": "He asked me if I could do him a favor",
        "Match": "FALSE",
        "Cnt": 2751
    },
    {
        "Text": "He can imitate the rest of the family",
        "Match": "FALSE",
        "Cnt": 2752
    },
    {
        "Text": "He doesn't speak French, neither do I",
        "Match": "FALSE",
        "Cnt": 2753
    },
    {
        "Text": "He earns more money than he can spend",
        "Match": "FALSE",
        "Cnt": 2754
    },
    {
        "Text": "He exhibited no remorse for his crime",
        "Match": "FALSE",
        "Cnt": 2755
    },
    {
        "Text": "He gave his children a good education",
        "Match": "FALSE",
        "Cnt": 2756
    },
    {
        "Text": "He wouldn't allow me to drive his car",
        "Match": "FALSE",
        "Cnt": 2757
    },
    {
        "Text": "His failure has nothing to do with me",
        "Match": "FALSE",
        "Cnt": 2758
    },
    {
        "Text": "How many cars has that company bought?",
        "Match": "FALSE",
        "Cnt": 2759
    },
    {
        "Text": "How many people are on board the ship?",
        "Match": "FALSE",
        "Cnt": 2760
    },
    {
        "Text": "I always got up early in my childhood",
        "Match": "FALSE",
        "Cnt": 2761
    },
    {
        "Text": "I am going to go play ball with Mohan",
        "Match": "FALSE",
        "Cnt": 2762
    },
    {
        "Text": "I am well acquainted with the subject",
        "Match": "FALSE",
        "Cnt": 2763
    },
    {
        "Text": "I don't know if it will rain tomorrow",
        "Match": "FALSE",
        "Cnt": 2764
    },
    {
        "Text": "I don't want to buy this kind of sofa",
        "Match": "FALSE",
        "Cnt": 2765
    },
    {
        "Text": "I doubt the veracity of his statement",
        "Match": "FALSE",
        "Cnt": 2766
    },
    {
        "Text": "I had never seen her before that time",
        "Match": "FALSE",
        "Cnt": 2767
    },
    {
        "Text": "I have just finished reading the book",
        "Match": "FALSE",
        "Cnt": 2768
    },
    {
        "Text": "I know a girl who can ride a unicycle",
        "Match": "FALSE",
        "Cnt": 2769
    },
    {
        "Text": "I know his address, but it's a secret",
        "Match": "FALSE",
        "Cnt": 2770
    },
    {
        "Text": "I regret not having bought that house",
        "Match": "FALSE",
        "Cnt": 2771
    },
    {
        "Text": "I want to help you with your homework",
        "Match": "FALSE",
        "Cnt": 2772
    },
    {
        "Text": "I'll be staying here for three months",
        "Match": "FALSE",
        "Cnt": 2773
    },
    {
        "Text": "I'm sure that she will come back soon",
        "Match": "FALSE",
        "Cnt": 2774
    },
    {
        "Text": "I've taught myself to play the guitar",
        "Match": "FALSE",
        "Cnt": 2775
    },
    {
        "Text": "It is necessary that you see a doctor",
        "Match": "FALSE",
        "Cnt": 2776
    },
    {
        "Text": "It's been ten years since we last met",
        "Match": "FALSE",
        "Cnt": 2777
    },
    {
        "Text": "Leave your umbrella at the front door",
        "Match": "FALSE",
        "Cnt": 2778
    },
    {
        "Text": "Look up the phrase in your dictionary",
        "Match": "FALSE",
        "Cnt": 2779
    },
    {
        "Text": "Mary was looking for you at that time",
        "Match": "FALSE",
        "Cnt": 2780
    },
    {
        "Text": "Mom scolded me for making fun of them",
        "Match": "FALSE",
        "Cnt": 2781
    },
    {
        "Text": "My mother put clean sheets on the bed",
        "Match": "FALSE",
        "Cnt": 2782
    },
    {
        "Text": "My sister always keeps her room clean",
        "Match": "FALSE",
        "Cnt": 2783
    },
    {
        "Text": "My uncle is an amateur cricket player",
        "Match": "FALSE",
        "Cnt": 2784
    },
    {
        "Text": "My uncle is an amateur cricket player",
        "Match": "FALSE",
        "Cnt": 2785
    },
    {
        "Text": "My uncle is an amateur cricket player",
        "Match": "FALSE",
        "Cnt": 2786
    },
    {
        "Text": "My uncle is an amateur cricket player",
        "Match": "FALSE",
        "Cnt": 2787
    },
    {
        "Text": "She called her children into the room",
        "Match": "FALSE",
        "Cnt": 2788
    },
    {
        "Text": "She passed away peacefully last night",
        "Match": "FALSE",
        "Cnt": 2789
    },
    {
        "Text": "She told me that she wanted a pet dog",
        "Match": "FALSE",
        "Cnt": 2790
    },
    {
        "Text": "She was brought up by her grandmother",
        "Match": "FALSE",
        "Cnt": 2791
    },
    {
        "Text": "She was brought up by her grandmother",
        "Match": "FALSE",
        "Cnt": 2792
    },
    {
        "Text": "She was watching the dead leaves fall",
        "Match": "FALSE",
        "Cnt": 2793
    },
    {
        "Text": "She will become a doctor in two years",
        "Match": "FALSE",
        "Cnt": 2794
    },
    {
        "Text": "Sickness prevented him from going out",
        "Match": "FALSE",
        "Cnt": 2795
    },
    {
        "Text": "Strange as it may sound, this is true",
        "Match": "FALSE",
        "Cnt": 2796
    },
    {
        "Text": "Taste this wine to see if you like it",
        "Match": "FALSE",
        "Cnt": 2797
    },
    {
        "Text": "The dog followed him wherever he went",
        "Match": "FALSE",
        "Cnt": 2798
    },
    {
        "Text": "The food was not fit for man or beast",
        "Match": "FALSE",
        "Cnt": 2799
    },
    {
        "Text": "The police were patrolling the street",
        "Match": "FALSE",
        "Cnt": 2800
    },
    {
        "Text": "The train is ten minutes behind today",
        "Match": "FALSE",
        "Cnt": 2801
    },
    {
        "Text": "The trouble is that they have no time",
        "Match": "FALSE",
        "Cnt": 2802
    },
    {
        "Text": "There is no longer any room for doubt",
        "Match": "FALSE",
        "Cnt": 2803
    },
    {
        "Text": "There's no use trying to persuade him",
        "Match": "FALSE",
        "Cnt": 2804
    },
    {
        "Text": "They charged me for the broken window",
        "Match": "FALSE",
        "Cnt": 2805
    },
    {
        "Text": "They were scattered in all directions",
        "Match": "FALSE",
        "Cnt": 2806
    },
    {
        "Text": "This cloth is really smooth and silky",
        "Match": "FALSE",
        "Cnt": 2807
    },
    {
        "Text": "This machine is driven by electricity",
        "Match": "FALSE",
        "Cnt": 2808
    },
    {
        "Text": "This medicine will clear up your cold",
        "Match": "FALSE",
        "Cnt": 2809
    },
    {
        "Text": "This medicine will take the pain away",
        "Match": "FALSE",
        "Cnt": 2810
    },
    {
        "Text": "Two boys came running out of the room",
        "Match": "FALSE",
        "Cnt": 2811
    },
    {
        "Text": "We have two unused rooms in our house",
        "Match": "FALSE",
        "Cnt": 2812
    },
    {
        "Text": "We ordered pink, but we received blue",
        "Match": "FALSE",
        "Cnt": 2813
    },
    {
        "Text": "We tried it again, but couldn't do it",
        "Match": "FALSE",
        "Cnt": 2814
    },
    {
        "Text": "Where's the remote control for the TV?",
        "Match": "FALSE",
        "Cnt": 2815
    },
    {
        "Text": "You are wearing your shirt inside out",
        "Match": "FALSE",
        "Cnt": 2816
    },
    {
        "Text": "You are wearing your shirt inside out",
        "Match": "FALSE",
        "Cnt": 2817
    },
    {
        "Text": "You can see a lot of stars in the sky",
        "Match": "FALSE",
        "Cnt": 2818
    },
    {
        "Text": "You should make good use of your time",
        "Match": "FALSE",
        "Cnt": 2819
    },
    {
        "Text": "Your daughter is not a child any more",
        "Match": "FALSE",
        "Cnt": 2820
    },
    {
        "Text": "Where do you live?\" \"I live in Tokyo.",
        "Match": "FALSE",
        "Cnt": 2821
    },
    {
        "Text": "Father sometimes took me to his office",
        "Match": "FALSE",
        "Cnt": 2822
    },
    {
        "Text": "He could not sleep because of the heat",
        "Match": "FALSE",
        "Cnt": 2823
    },
    {
        "Text": "He embezzled the money from his office",
        "Match": "FALSE",
        "Cnt": 2824
    },
    {
        "Text": "He had nothing to say, so he went away",
        "Match": "FALSE",
        "Cnt": 2825
    },
    {
        "Text": "He is getting along with his employees",
        "Match": "FALSE",
        "Cnt": 2826
    },
    {
        "Text": "He sold his own car without hesitation",
        "Match": "FALSE",
        "Cnt": 2827
    },
    {
        "Text": "He used to tell me stories about India",
        "Match": "FALSE",
        "Cnt": 2828
    },
    {
        "Text": "Her mother was busy cooking the dinner",
        "Match": "FALSE",
        "Cnt": 2829
    },
    {
        "Text": "How many times a day does that bus run?",
        "Match": "FALSE",
        "Cnt": 2830
    },
    {
        "Text": "How soon can you have this dress ready?",
        "Match": "FALSE",
        "Cnt": 2831
    },
    {
        "Text": "I am fully convinced of your innocence",
        "Match": "FALSE",
        "Cnt": 2832
    },
    {
        "Text": "I am interested in American literature",
        "Match": "FALSE",
        "Cnt": 2833
    },
    {
        "Text": "I am much obliged to you for your help",
        "Match": "FALSE",
        "Cnt": 2834
    },
    {
        "Text": "I began to sing when I was a youngster",
        "Match": "FALSE",
        "Cnt": 2835
    },
    {
        "Text": "I can't put up with this noise anymore",
        "Match": "FALSE",
        "Cnt": 2836
    },
    {
        "Text": "I found nothing but a pair of scissors",
        "Match": "FALSE",
        "Cnt": 2837
    },
    {
        "Text": "I know that all of this is just a game",
        "Match": "FALSE",
        "Cnt": 2838
    },
    {
        "Text": "I met her in London for the first time",
        "Match": "FALSE",
        "Cnt": 2839
    },
    {
        "Text": "I need to go home a little early today",
        "Match": "FALSE",
        "Cnt": 2840
    },
    {
        "Text": "I was able to answer all the questions",
        "Match": "FALSE",
        "Cnt": 2841
    },
    {
        "Text": "I will ask him about it tomorrow, then",
        "Match": "FALSE",
        "Cnt": 2842
    },
    {
        "Text": "I will find out how the medicine works",
        "Match": "FALSE",
        "Cnt": 2843
    },
    {
        "Text": "I will pay my debt as soon as possible",
        "Match": "FALSE",
        "Cnt": 2844
    },
    {
        "Text": "I'd like to see him tomorrow afternoon",
        "Match": "FALSE",
        "Cnt": 2845
    },
    {
        "Text": "I'll be in Tokyo on business next week",
        "Match": "FALSE",
        "Cnt": 2846
    },
    {
        "Text": "If you have time, please drop in on us",
        "Match": "FALSE",
        "Cnt": 2847
    },
    {
        "Text": "It will go away by itself in two weeks",
        "Match": "FALSE",
        "Cnt": 2848
    },
    {
        "Text": "Mother bought a beautiful doll for her",
        "Match": "FALSE",
        "Cnt": 2849
    },
    {
        "Text": "My father consented to my going abroad",
        "Match": "FALSE",
        "Cnt": 2850
    },
    {
        "Text": "My mother often suffers from headaches",
        "Match": "FALSE",
        "Cnt": 2851
    },
    {
        "Text": "Nothing but a miracle can save her now",
        "Match": "FALSE",
        "Cnt": 2852
    },
    {
        "Text": "Please come again two weeks from today",
        "Match": "FALSE",
        "Cnt": 2853
    },
    {
        "Text": "She is living in some village in India",
        "Match": "FALSE",
        "Cnt": 2854
    },
    {
        "Text": "She reminds me very much of her mother",
        "Match": "FALSE",
        "Cnt": 2855
    },
    {
        "Text": "She said to herself, \"I am very happy",
        "Match": "FALSE",
        "Cnt": 2856
    },
    {
        "Text": "Talking is one thing, doing is another",
        "Match": "FALSE",
        "Cnt": 2857
    },
    {
        "Text": "The boy cannot have stolen my umbrella",
        "Match": "FALSE",
        "Cnt": 2858
    },
    {
        "Text": "The gentleman is a very famous pianist",
        "Match": "FALSE",
        "Cnt": 2859
    },
    {
        "Text": "The lights have been burning all night",
        "Match": "FALSE",
        "Cnt": 2860
    },
    {
        "Text": "The rumor proved to be an absolute lie",
        "Match": "FALSE",
        "Cnt": 2861
    },
    {
        "Text": "The scar on his cheek hardly shows now",
        "Match": "FALSE",
        "Cnt": 2862
    },
    {
        "Text": "The two languages have a lot in common",
        "Match": "FALSE",
        "Cnt": 2863
    },
    {
        "Text": "The work must be completed by tomorrow",
        "Match": "FALSE",
        "Cnt": 2864
    },
    {
        "Text": "They will fall in love with each other",
        "Match": "FALSE",
        "Cnt": 2865
    },
    {
        "Text": "We must try to protect the environment",
        "Match": "FALSE",
        "Cnt": 2866
    },
    {
        "Text": "What languages do they speak in Canada?",
        "Match": "FALSE",
        "Cnt": 2867
    },
    {
        "Text": "Which is the more expensive of the two?",
        "Match": "FALSE",
        "Cnt": 2868
    },
    {
        "Text": "Who doesn't know such a simple proverb?",
        "Match": "FALSE",
        "Cnt": 2869
    },
    {
        "Text": "Workers must have their hair cut short",
        "Match": "FALSE",
        "Cnt": 2870
    },
    {
        "Text": "Would you mind turning down the volume?",
        "Match": "FALSE",
        "Cnt": 2871
    },
    {
        "Text": "You must observe the rules of the club",
        "Match": "FALSE",
        "Cnt": 2872
    },
    {
        "Text": "You've got a nerve to say such a thing!",
        "Match": "FALSE",
        "Cnt": 2873
    },
    {
        "Text": "Your examination results are excellent",
        "Match": "FALSE",
        "Cnt": 2874
    },
    {
        "Text": "All you have to do is follow his advice",
        "Match": "FALSE",
        "Cnt": 2875
    },
    {
        "Text": "Cows are sacred to many people in India",
        "Match": "FALSE",
        "Cnt": 2876
    },
    {
        "Text": "He entered the room slowly by that door",
        "Match": "FALSE",
        "Cnt": 2877
    },
    {
        "Text": "He had to go through a lot of hardships",
        "Match": "FALSE",
        "Cnt": 2878
    },
    {
        "Text": "He had to reduce the price of his wares",
        "Match": "FALSE",
        "Cnt": 2879
    },
    {
        "Text": "He has invited me to attend his wedding",
        "Match": "FALSE",
        "Cnt": 2880
    },
    {
        "Text": "He is always complaining about his boss",
        "Match": "FALSE",
        "Cnt": 2881
    },
    {
        "Text": "He was a great poet as well as a doctor",
        "Match": "FALSE",
        "Cnt": 2882
    },
    {
        "Text": "He was covered in mud from head to foot",
        "Match": "FALSE",
        "Cnt": 2883
    },
    {
        "Text": "He was destined never to meet her again",
        "Match": "FALSE",
        "Cnt": 2884
    },
    {
        "Text": "He was happy at the news of her success",
        "Match": "FALSE",
        "Cnt": 2885
    },
    {
        "Text": "How about adding a little bit more salt?",
        "Match": "FALSE",
        "Cnt": 2886
    },
    {
        "Text": "How did you get tickets for the concert?",
        "Match": "FALSE",
        "Cnt": 2887
    },
    {
        "Text": "How much time do we have to finish this?",
        "Match": "FALSE",
        "Cnt": 2888
    },
    {
        "Text": "I am confident he will keep his promise",
        "Match": "FALSE",
        "Cnt": 2889
    },
    {
        "Text": "I am not sure how to pronounce the word",
        "Match": "FALSE",
        "Cnt": 2890
    },
    {
        "Text": "I cannot stand his arrogance any longer",
        "Match": "FALSE",
        "Cnt": 2891
    },
    {
        "Text": "I don't know if I'll have time to do it",
        "Match": "FALSE",
        "Cnt": 2892
    },
    {
        "Text": "I have been writing letters all morning",
        "Match": "FALSE",
        "Cnt": 2893
    },
    {
        "Text": "I have been writing letters all morning",
        "Match": "FALSE",
        "Cnt": 2894
    },
    {
        "Text": "I have seen angels and talked with them",
        "Match": "FALSE",
        "Cnt": 2895
    },
    {
        "Text": "I was disappointed that you didn't call",
        "Match": "FALSE",
        "Cnt": 2896
    },
    {
        "Text": "I wish I had more time to talk with you",
        "Match": "FALSE",
        "Cnt": 2897
    },
    {
        "Text": "I would rather stay at home than go out",
        "Match": "FALSE",
        "Cnt": 2898
    },
    {
        "Text": "I'll expect to hear from you by Tuesday",
        "Match": "FALSE",
        "Cnt": 2899
    },
    {
        "Text": "I'll give you an answer in a day or two",
        "Match": "FALSE",
        "Cnt": 2900
    },
    {
        "Text": "I'm not ashamed of my father being poor",
        "Match": "FALSE",
        "Cnt": 2901
    },
    {
        "Text": "I've never met her, but I recognize her",
        "Match": "FALSE",
        "Cnt": 2902
    },
    {
        "Text": "I've never met him, but I recognize him",
        "Match": "FALSE",
        "Cnt": 2903
    },
    {
        "Text": "It's about time for the train to arrive",
        "Match": "FALSE",
        "Cnt": 2904
    },
    {
        "Text": "It's getting dark",
        "Match": "FALSE",
        "Cnt": 2905
    },
    {
        "Text": "Keep going straight through the village",
        "Match": "FALSE",
        "Cnt": 2906
    },
    {
        "Text": "Mother and I are different in every way",
        "Match": "FALSE",
        "Cnt": 2907
    },
    {
        "Text": "Nobody could tell what he meant by that",
        "Match": "FALSE",
        "Cnt": 2908
    },
    {
        "Text": "Science begins when you ask why and how",
        "Match": "FALSE",
        "Cnt": 2909
    },
    {
        "Text": "She had a daughter by her first husband",
        "Match": "FALSE",
        "Cnt": 2910
    },
    {
        "Text": "She loves watching tennis matches on TV",
        "Match": "FALSE",
        "Cnt": 2911
    },
    {
        "Text": "She may have to quit her job next month",
        "Match": "FALSE",
        "Cnt": 2912
    },
    {
        "Text": "Such a thing cannot be found everywhere",
        "Match": "FALSE",
        "Cnt": 2913
    },
    {
        "Text": "Take this medicine when you have a cold",
        "Match": "FALSE",
        "Cnt": 2914
    },
    {
        "Text": "Tell me what you are looking forward to",
        "Match": "FALSE",
        "Cnt": 2915
    },
    {
        "Text": "The new bridge was named Rainbow Bridge",
        "Match": "FALSE",
        "Cnt": 2916
    },
    {
        "Text": "The police officer arrested the burglar",
        "Match": "FALSE",
        "Cnt": 2917
    },
    {
        "Text": "The room has been empty for a long time",
        "Match": "FALSE",
        "Cnt": 2918
    },
    {
        "Text": "There are no live animals in the museum",
        "Match": "FALSE",
        "Cnt": 2919
    },
    {
        "Text": "There is no satisfying spoiled children",
        "Match": "FALSE",
        "Cnt": 2920
    },
    {
        "Text": "There used to be a big pond around here",
        "Match": "FALSE",
        "Cnt": 2921
    },
    {
        "Text": "There's something we need to talk about",
        "Match": "FALSE",
        "Cnt": 2922
    },
    {
        "Text": "They heard a gun go off in the distance",
        "Match": "FALSE",
        "Cnt": 2923
    },
    {
        "Text": "Three men broke out of prison yesterday",
        "Match": "FALSE",
        "Cnt": 2924
    },
    {
        "Text": "We saw the film and had dinner together",
        "Match": "FALSE",
        "Cnt": 2925
    },
    {
        "Text": "We should try to understand one another",
        "Match": "FALSE",
        "Cnt": 2926
    },
    {
        "Text": "What do you want to do in the afternoon?",
        "Match": "FALSE",
        "Cnt": 2927
    },
    {
        "Text": "What time does your watch say it is now?",
        "Match": "FALSE",
        "Cnt": 2928
    },
    {
        "Text": "What time does your watch say it is now?",
        "Match": "FALSE",
        "Cnt": 2929
    },
    {
        "Text": "Would you just move along a bit, please?",
        "Match": "FALSE",
        "Cnt": 2930
    },
    {
        "Text": "A gentleman would not spit on the street",
        "Match": "FALSE",
        "Cnt": 2931
    },
    {
        "Text": "Absence of rain caused the plants to die",
        "Match": "FALSE",
        "Cnt": 2932
    },
    {
        "Text": "As a result of the war, many people died",
        "Match": "FALSE",
        "Cnt": 2933
    },
    {
        "Text": "Can you identify the man in this picture?",
        "Match": "FALSE",
        "Cnt": 2934
    },
    {
        "Text": "Did you feel the earthquake this morning?",
        "Match": "FALSE",
        "Cnt": 2935
    },
    {
        "Text": "Give up smoking if you want to live long",
        "Match": "FALSE",
        "Cnt": 2936
    },
    {
        "Text": "Having seen him before, I recognized him",
        "Match": "FALSE",
        "Cnt": 2937
    },
    {
        "Text": "He could not come because of his illness",
        "Match": "FALSE",
        "Cnt": 2938
    },
    {
        "Text": "He defeated his opponent in the election",
        "Match": "FALSE",
        "Cnt": 2939
    },
    {
        "Text": "He failed to come up to our expectations",
        "Match": "FALSE",
        "Cnt": 2940
    },
    {
        "Text": "He jumped into the water clothes and all",
        "Match": "FALSE",
        "Cnt": 2941
    },
    {
        "Text": "He ordered them to release the prisoners",
        "Match": "FALSE",
        "Cnt": 2942
    },
    {
        "Text": "He tried in vain to open the locked door",
        "Match": "FALSE",
        "Cnt": 2943
    },
    {
        "Text": "I always rely on him in times of trouble",
        "Match": "FALSE",
        "Cnt": 2944
    },
    {
        "Text": "I am convinced that he did nothing wrong",
        "Match": "FALSE",
        "Cnt": 2945
    },
    {
        "Text": "I am looking for a present for my mother",
        "Match": "FALSE",
        "Cnt": 2946
    },
    {
        "Text": "I don't feel like studying English today",
        "Match": "FALSE",
        "Cnt": 2947
    },
    {
        "Text": "I don't think that it will rain tomorrow",
        "Match": "FALSE",
        "Cnt": 2948
    },
    {
        "Text": "I have no time to help you with the work",
        "Match": "FALSE",
        "Cnt": 2949
    },
    {
        "Text": "I heard someone call my name from behind",
        "Match": "FALSE",
        "Cnt": 2950
    },
    {
        "Text": "I watched the game from beginning to end",
        "Match": "FALSE",
        "Cnt": 2951
    },
    {
        "Text": "I'll never forget how kind you have been",
        "Match": "FALSE",
        "Cnt": 2952
    },
    {
        "Text": "I'm going to go buy some materials today",
        "Match": "FALSE",
        "Cnt": 2953
    },
    {
        "Text": "I'm very happy to make your acquaintance",
        "Match": "FALSE",
        "Cnt": 2954
    },
    {
        "Text": "If only I had known the answer yesterday!",
        "Match": "FALSE",
        "Cnt": 2955
    },
    {
        "Text": "If you are hungry, you can eat the bread",
        "Match": "FALSE",
        "Cnt": 2956
    },
    {
        "Text": "In the woods, she met with two strangers",
        "Match": "FALSE",
        "Cnt": 2957
    },
    {
        "Text": "It is up to you whether to buy it or not",
        "Match": "FALSE",
        "Cnt": 2958
    },
    {
        "Text": "It was hard for me to refuse his request",
        "Match": "FALSE",
        "Cnt": 2959
    },
    {
        "Text": "It was not easy for us to find his house",
        "Match": "FALSE",
        "Cnt": 2960
    },
    {
        "Text": "Japan depends on other countries for oil",
        "Match": "FALSE",
        "Cnt": 2961
    },
    {
        "Text": "My brother would often stay up all night",
        "Match": "FALSE",
        "Cnt": 2962
    },
    {
        "Text": "She has invited me to attend her wedding",
        "Match": "FALSE",
        "Cnt": 2963
    },
    {
        "Text": "The air conditioner makes too much noise",
        "Match": "FALSE",
        "Cnt": 2964
    },
    {
        "Text": "The baby has been crying for a long time",
        "Match": "FALSE",
        "Cnt": 2965
    },
    {
        "Text": "The box was so heavy I could not move it",
        "Match": "FALSE",
        "Cnt": 2966
    },
    {
        "Text": "The girl who works at the bakery is cute",
        "Match": "FALSE",
        "Cnt": 2967
    },
    {
        "Text": "The museum is open from Monday to Friday",
        "Match": "FALSE",
        "Cnt": 2968
    },
    {
        "Text": "The old lady smiled at her granddaughter",
        "Match": "FALSE",
        "Cnt": 2969
    },
    {
        "Text": "The situation calls for drastic measures",
        "Match": "FALSE",
        "Cnt": 2970
    },
    {
        "Text": "The teacher said, \"That's all for today",
        "Match": "FALSE",
        "Cnt": 2971
    },
    {
        "Text": "These pictures are really very beautiful",
        "Match": "FALSE",
        "Cnt": 2972
    },
    {
        "Text": "They live in a little village in England",
        "Match": "FALSE",
        "Cnt": 2973
    },
    {
        "Text": "We should do away with the death penalty",
        "Match": "FALSE",
        "Cnt": 2974
    },
    {
        "Text": "What are you going to do with this money?",
        "Match": "FALSE",
        "Cnt": 2975
    },
    {
        "Text": "Will you take us for a drive next Sunday?",
        "Match": "FALSE",
        "Cnt": 2976
    },
    {
        "Text": "Would you please explain the rules to me?",
        "Match": "FALSE",
        "Cnt": 2977
    },
    {
        "Text": "You are too ready to speak ill of others",
        "Match": "FALSE",
        "Cnt": 2978
    },
    {
        "Text": "You cannot eat your cake and have it too",
        "Match": "FALSE",
        "Cnt": 2979
    },
    {
        "Text": "You should take care of your sick mother",
        "Match": "FALSE",
        "Cnt": 2980
    },
    {
        "Text": "Africa was once called the Dark Continent",
        "Match": "FALSE",
        "Cnt": 2981
    },
    {
        "Text": "Believe it or not, she has three children",
        "Match": "FALSE",
        "Cnt": 2982
    },
    {
        "Text": "Cancer can be cured if discovered in time",
        "Match": "FALSE",
        "Cnt": 2983
    },
    {
        "Text": "Could you send someone up to make the bed?",
        "Match": "FALSE",
        "Cnt": 2984
    },
    {
        "Text": "He is always here between 5 and 6 o'clock",
        "Match": "FALSE",
        "Cnt": 2985
    },
    {
        "Text": "He is brave enough to go there by himself",
        "Match": "FALSE",
        "Cnt": 2986
    },
    {
        "Text": "He is coming to see me tomorrow afternoon",
        "Match": "FALSE",
        "Cnt": 2987
    },
    {
        "Text": "He was caught in the act of pickpocketing",
        "Match": "FALSE",
        "Cnt": 2988
    },
    {
        "Text": "He went outside for a breath of fresh air",
        "Match": "FALSE",
        "Cnt": 2989
    },
    {
        "Text": "Health is the most precious thing we have",
        "Match": "FALSE",
        "Cnt": 2990
    },
    {
        "Text": "I can't put up with that noise any longer",
        "Match": "FALSE",
        "Cnt": 2991
    },
    {
        "Text": "I can't put up with that noise any longer",
        "Match": "FALSE",
        "Cnt": 2992
    },
    {
        "Text": "I couldn't make out what he wanted to say",
        "Match": "FALSE",
        "Cnt": 2993
    },
    {
        "Text": "I don't know how to operate this computer",
        "Match": "FALSE",
        "Cnt": 2994
    },
    {
        "Text": "I don't know if she will go there with me",
        "Match": "FALSE",
        "Cnt": 2995
    },
    {
        "Text": "I find foreign languages very interesting",
        "Match": "FALSE",
        "Cnt": 2996
    },
    {
        "Text": "I have a lot of work to get through today",
        "Match": "FALSE",
        "Cnt": 2997
    },
    {
        "Text": "I have been taking care of him ever since",
        "Match": "FALSE",
        "Cnt": 2998
    },
    {
        "Text": "I shouldn't eat food that has sugar in it",
        "Match": "FALSE",
        "Cnt": 2999
    },
    {
        "Text": "I tried to erase the memory of her crying",
        "Match": "FALSE",
        "Cnt": 3000
    },
    {
        "Text": "I want to leave this difficult job to her",
        "Match": "FALSE",
        "Cnt": 3001
    },
    {
        "Text": "I'll wait here until my medicine is ready",
        "Match": "FALSE",
        "Cnt": 3002
    },
    {
        "Text": "I'm willing to help you if you want me to",
        "Match": "FALSE",
        "Cnt": 3003
    },
    {
        "Text": "I'm wondering whether to take on that job",
        "Match": "FALSE",
        "Cnt": 3004
    },
    {
        "Text": "It has been raining for three days on end",
        "Match": "FALSE",
        "Cnt": 3005
    },
    {
        "Text": "It is definite that he will go to America",
        "Match": "FALSE",
        "Cnt": 3006
    },
    {
        "Text": "Let's go and see as many things as we can",
        "Match": "FALSE",
        "Cnt": 3007
    },
    {
        "Text": "Let's let the workers go home early today",
        "Match": "FALSE",
        "Cnt": 3008
    },
    {
        "Text": "Saying and doing are two different things",
        "Match": "FALSE",
        "Cnt": 3009
    },
    {
        "Text": "Saying and doing are two different things",
        "Match": "FALSE",
        "Cnt": 3010
    },
    {
        "Text": "She could not come because of her illness",
        "Match": "FALSE",
        "Cnt": 3011
    },
    {
        "Text": "She is well known in both India and China",
        "Match": "FALSE",
        "Cnt": 3012
    },
    {
        "Text": "She is well known in both India and China",
        "Match": "FALSE",
        "Cnt": 3013
    },
    {
        "Text": "She showed me a letter written in English",
        "Match": "FALSE",
        "Cnt": 3014
    },
    {
        "Text": "Some of the apples in the box were rotten",
        "Match": "FALSE",
        "Cnt": 3015
    },
    {
        "Text": "Some people like cats, others prefer dogs",
        "Match": "FALSE",
        "Cnt": 3016
    },
    {
        "Text": "That accident was due to his carelessness",
        "Match": "FALSE",
        "Cnt": 3017
    },
    {
        "Text": "The Japanese eat rice at least once a day",
        "Match": "FALSE",
        "Cnt": 3018
    },
    {
        "Text": "The Qutub Minar and Red Fort are in Delhi",
        "Match": "FALSE",
        "Cnt": 3019
    },
    {
        "Text": "The old farmer did not pay him much money",
        "Match": "FALSE",
        "Cnt": 3020
    },
    {
        "Text": "The teacher was disappointed at my answer",
        "Match": "FALSE",
        "Cnt": 3021
    },
    {
        "Text": "Toudaiji is the bigger of the two temples",
        "Match": "FALSE",
        "Cnt": 3022
    },
    {
        "Text": "Why is he angry about something like that?",
        "Match": "FALSE",
        "Cnt": 3023
    },
    {
        "Text": "You will be punished if you break the law",
        "Match": "FALSE",
        "Cnt": 3024
    },
    {
        "Text": "You're spending too much time watching TV",
        "Match": "FALSE",
        "Cnt": 3025
    },
    {
        "Text": "Are these the glasses you were looking for?",
        "Match": "FALSE",
        "Cnt": 3026
    },
    {
        "Text": "By the way, have you ever been to Hokkaido?",
        "Match": "FALSE",
        "Cnt": 3027
    },
    {
        "Text": "Cover up the injured man with this blanket",
        "Match": "FALSE",
        "Cnt": 3028
    },
    {
        "Text": "Do you know the man standing on the bridge?",
        "Match": "FALSE",
        "Cnt": 3029
    },
    {
        "Text": "During the war, we had to do without sugar",
        "Match": "FALSE",
        "Cnt": 3030
    },
    {
        "Text": "From year to year they were growing poorer",
        "Match": "FALSE",
        "Cnt": 3031
    },
    {
        "Text": "He did not show up at the party last night",
        "Match": "FALSE",
        "Cnt": 3032
    },
    {
        "Text": "He was arrested because he stole the money",
        "Match": "FALSE",
        "Cnt": 3033
    },
    {
        "Text": "He was arrested because he stole the money",
        "Match": "FALSE",
        "Cnt": 3034
    },
    {
        "Text": "His disappointment was obvious to everyone",
        "Match": "FALSE",
        "Cnt": 3035
    },
    {
        "Text": "His main object in life was to become rich",
        "Match": "FALSE",
        "Cnt": 3036
    },
    {
        "Text": "His pride didn't allow him to ask for help",
        "Match": "FALSE",
        "Cnt": 3037
    },
    {
        "Text": "I am afraid of the situation getting worse",
        "Match": "FALSE",
        "Cnt": 3038
    },
    {
        "Text": "I chose to leave instead of staying behind",
        "Match": "FALSE",
        "Cnt": 3039
    },
    {
        "Text": "I like the blue one",
        "Match": "FALSE",
        "Cnt": 3040
    },
    {
        "Text": "I like the blue one",
        "Match": "FALSE",
        "Cnt": 3041
    },
    {
        "Text": "I met my teacher on the way to the station",
        "Match": "FALSE",
        "Cnt": 3042
    },
    {
        "Text": "I never dreamed that I would meet you here",
        "Match": "FALSE",
        "Cnt": 3043
    },
    {
        "Text": "I ran out of money during my stay in India",
        "Match": "FALSE",
        "Cnt": 3044
    },
    {
        "Text": "I'll let you know when it has been decided",
        "Match": "FALSE",
        "Cnt": 3045
    },
    {
        "Text": "In Japan a new school year starts in April",
        "Match": "FALSE",
        "Cnt": 3046
    },
    {
        "Text": "India has a different climate from England",
        "Match": "FALSE",
        "Cnt": 3047
    },
    {
        "Text": "Is it necessary for me to attend the party?",
        "Match": "FALSE",
        "Cnt": 3048
    },
    {
        "Text": "It doesn't matter whether he agrees or not",
        "Match": "FALSE",
        "Cnt": 3049
    },
    {
        "Text": "It is said that women live longer than men",
        "Match": "FALSE",
        "Cnt": 3050
    },
    {
        "Text": "It was Tom that broke the window yesterday",
        "Match": "FALSE",
        "Cnt": 3051
    },
    {
        "Text": "Let me congratulate you on your engagement",
        "Match": "FALSE",
        "Cnt": 3052
    },
    {
        "Text": "My father told me not to read books in bed",
        "Match": "FALSE",
        "Cnt": 3053
    },
    {
        "Text": "Our health is our most precious possession",
        "Match": "FALSE",
        "Cnt": 3054
    },
    {
        "Text": "People of your age often have this problem",
        "Match": "FALSE",
        "Cnt": 3055
    },
    {
        "Text": "Respect yourself and you will be respected",
        "Match": "FALSE",
        "Cnt": 3056
    },
    {
        "Text": "She has a rich vocabulary of English words",
        "Match": "FALSE",
        "Cnt": 3057
    },
    {
        "Text": "Some people want to amend the constitution",
        "Match": "FALSE",
        "Cnt": 3058
    },
    {
        "Text": "The doctor advised that she take a holiday",
        "Match": "FALSE",
        "Cnt": 3059
    },
    {
        "Text": "The doctor told him to cut down on smoking",
        "Match": "FALSE",
        "Cnt": 3060
    },
    {
        "Text": "The door was locked and we couldn't get in",
        "Match": "FALSE",
        "Cnt": 3061
    },
    {
        "Text": "The girl tried hard to hold back her tears",
        "Match": "FALSE",
        "Cnt": 3062
    },
    {
        "Text": "The man who is standing there is my father",
        "Match": "FALSE",
        "Cnt": 3063
    },
    {
        "Text": "The wind carries seeds for great distances",
        "Match": "FALSE",
        "Cnt": 3064
    },
    {
        "Text": "There are more clouds today than yesterday",
        "Match": "FALSE",
        "Cnt": 3065
    },
    {
        "Text": "They furnished the library with many books",
        "Match": "FALSE",
        "Cnt": 3066
    },
    {
        "Text": "This museum has been closed for five years",
        "Match": "FALSE",
        "Cnt": 3067
    },
    {
        "Text": "This poem was originally written in French",
        "Match": "FALSE",
        "Cnt": 3068
    },
    {
        "Text": "Tom and Mary want to know what our plan is",
        "Match": "FALSE",
        "Cnt": 3069
    },
    {
        "Text": "Two brothers set out on a journey together",
        "Match": "FALSE",
        "Cnt": 3070
    },
    {
        "Text": "We investigated the matter from all angles",
        "Match": "FALSE",
        "Cnt": 3071
    },
    {
        "Text": "We stayed with them all through the summer",
        "Match": "FALSE",
        "Cnt": 3072
    },
    {
        "Text": "We've run out of paper for the photocopier",
        "Match": "FALSE",
        "Cnt": 3073
    },
    {
        "Text": "Whoever wants to come to my party may come",
        "Match": "FALSE",
        "Cnt": 3074
    },
    {
        "Text": "You are not supposed to play baseball here",
        "Match": "FALSE",
        "Cnt": 3075
    },
    {
        "Text": "You aren't leaving Japan for good, are you?",
        "Match": "FALSE",
        "Cnt": 3076
    },
    {
        "Text": "Your plan requires a large amount of money",
        "Match": "FALSE",
        "Cnt": 3077
    },
    {
        "Text": "A madman is not accountable for his actions",
        "Match": "FALSE",
        "Cnt": 3078
    },
    {
        "Text": "A rubber ball bounces because it is elastic",
        "Match": "FALSE",
        "Cnt": 3079
    },
    {
        "Text": "All the answers to this question were wrong",
        "Match": "FALSE",
        "Cnt": 3080
    },
    {
        "Text": "All the answers to this question were wrong",
        "Match": "FALSE",
        "Cnt": 3081
    },
    {
        "Text": "Do we have to get up early tomorrow morning?",
        "Match": "FALSE",
        "Cnt": 3082
    },
    {
        "Text": "Do you know this part of the city very well?",
        "Match": "FALSE",
        "Cnt": 3083
    },
    {
        "Text": "Don't forget to come here at seven tomorrow",
        "Match": "FALSE",
        "Cnt": 3084
    },
    {
        "Text": "Don't forget to come here at seven tomorrow",
        "Match": "FALSE",
        "Cnt": 3085
    },
    {
        "Text": "He is a British citizen, but lives in India",
        "Match": "FALSE",
        "Cnt": 3086
    },
    {
        "Text": "He realized his dream of becoming an artist",
        "Match": "FALSE",
        "Cnt": 3087
    },
    {
        "Text": "He said he would write to me, but he hasn't",
        "Match": "FALSE",
        "Cnt": 3088
    },
    {
        "Text": "I don't know when she will leave for London",
        "Match": "FALSE",
        "Cnt": 3089
    },
    {
        "Text": "I feel cold",
        "Match": "FALSE",
        "Cnt": 3090
    },
    {
        "Text": "I haven't had a chance to see the movie yet",
        "Match": "FALSE",
        "Cnt": 3091
    },
    {
        "Text": "If it rains tomorrow, will you stay at home?",
        "Match": "FALSE",
        "Cnt": 3092
    },
    {
        "Text": "It is difficult for me to get up before six",
        "Match": "FALSE",
        "Cnt": 3093
    },
    {
        "Text": "It's impossible for me to explain it to you",
        "Match": "FALSE",
        "Cnt": 3094
    },
    {
        "Text": "My father spends a lot of time on his hobby",
        "Match": "FALSE",
        "Cnt": 3095
    },
    {
        "Text": "My opinion is entirely different from yours",
        "Match": "FALSE",
        "Cnt": 3096
    },
    {
        "Text": "My parents have just arrived at the station",
        "Match": "FALSE",
        "Cnt": 3097
    },
    {
        "Text": "She cried out the moment she saw her mother",
        "Match": "FALSE",
        "Cnt": 3098
    },
    {
        "Text": "She left the old newspapers lying in a heap",
        "Match": "FALSE",
        "Cnt": 3099
    },
    {
        "Text": "That movie theater always shows good movies",
        "Match": "FALSE",
        "Cnt": 3100
    },
    {
        "Text": "The baby woke up in the middle of the night",
        "Match": "FALSE",
        "Cnt": 3101
    },
    {
        "Text": "The children tried to imitate their teacher",
        "Match": "FALSE",
        "Cnt": 3102
    },
    {
        "Text": "The government has been reforming education",
        "Match": "FALSE",
        "Cnt": 3103
    },
    {
        "Text": "The male peacock has colorful tail feathers",
        "Match": "FALSE",
        "Cnt": 3104
    },
    {
        "Text": "The mother is leading her child by the hand",
        "Match": "FALSE",
        "Cnt": 3105
    },
    {
        "Text": "The thief cursed the police for finding him",
        "Match": "FALSE",
        "Cnt": 3106
    },
    {
        "Text": "The world is changing more and more quickly",
        "Match": "FALSE",
        "Cnt": 3107
    },
    {
        "Text": "This coffee is so hot that I can't drink it",
        "Match": "FALSE",
        "Cnt": 3108
    },
    {
        "Text": "This is the very book that I wanted to read",
        "Match": "FALSE",
        "Cnt": 3109
    },
    {
        "Text": "Waking up is the opposite of going to sleep",
        "Match": "FALSE",
        "Cnt": 3110
    },
    {
        "Text": "Whoever comes first will get the best seats",
        "Match": "FALSE",
        "Cnt": 3111
    },
    {
        "Text": "A big earthquake occurred in India yesterday",
        "Match": "FALSE",
        "Cnt": 3112
    },
    {
        "Text": "Are you going to cut down all the trees here?",
        "Match": "FALSE",
        "Cnt": 3113
    },
    {
        "Text": "Be sure to put out the fire before you leave",
        "Match": "FALSE",
        "Cnt": 3114
    },
    {
        "Text": "Because of his advice, I was able to succeed",
        "Match": "FALSE",
        "Cnt": 3115
    },
    {
        "Text": "Did it not occur to you to close the windows?",
        "Match": "FALSE",
        "Cnt": 3116
    },
    {
        "Text": "Don't add sentences from copyrighted sources",
        "Match": "FALSE",
        "Cnt": 3117
    },
    {
        "Text": "Everyone could easily see his disappointment",
        "Match": "FALSE",
        "Cnt": 3118
    },
    {
        "Text": "He broke himself of the bad habit of smoking",
        "Match": "FALSE",
        "Cnt": 3119
    },
    {
        "Text": "He is anxious to know the result of the test",
        "Match": "FALSE",
        "Cnt": 3120
    },
    {
        "Text": "He lost his balance and fell off his bicycle",
        "Match": "FALSE",
        "Cnt": 3121
    },
    {
        "Text": "He ought to have made allowances for his age",
        "Match": "FALSE",
        "Cnt": 3122
    },
    {
        "Text": "He tends to get angry when people oppose him",
        "Match": "FALSE",
        "Cnt": 3123
    },
    {
        "Text": "He works on the farm from morning till night",
        "Match": "FALSE",
        "Cnt": 3124
    },
    {
        "Text": "His new book is going to come out next month",
        "Match": "FALSE",
        "Cnt": 3125
    },
    {
        "Text": "I am going to stay here for a couple of days",
        "Match": "FALSE",
        "Cnt": 3126
    },
    {
        "Text": "I have two sisters, both of whom are married",
        "Match": "FALSE",
        "Cnt": 3127
    },
    {
        "Text": "I received a letter which was written by her",
        "Match": "FALSE",
        "Cnt": 3128
    },
    {
        "Text": "I will give you a call as soon as I get home",
        "Match": "FALSE",
        "Cnt": 3129
    },
    {
        "Text": "It's been pouring here for the last few days",
        "Match": "FALSE",
        "Cnt": 3130
    },
    {
        "Text": "Let me give you a lift as far as the station",
        "Match": "FALSE",
        "Cnt": 3131
    },
    {
        "Text": "Mt",
        "Match": "FALSE",
        "Cnt": 3132
    },
    {
        "Text": "My father left me a lot of money in his will",
        "Match": "FALSE",
        "Cnt": 3133
    },
    {
        "Text": "She burst into tears when she heard the news",
        "Match": "FALSE",
        "Cnt": 3134
    },
    {
        "Text": "She poured coffee into the cups on the table",
        "Match": "FALSE",
        "Cnt": 3135
    },
    {
        "Text": "Something is wrong with this washing machine",
        "Match": "FALSE",
        "Cnt": 3136
    },
    {
        "Text": "Take off your hat when you enter a classroom",
        "Match": "FALSE",
        "Cnt": 3137
    },
    {
        "Text": "The accident was due to his careless driving",
        "Match": "FALSE",
        "Cnt": 3138
    },
    {
        "Text": "The car broke down on the way to the airport",
        "Match": "FALSE",
        "Cnt": 3139
    },
    {
        "Text": "The factory will cease operations next month",
        "Match": "FALSE",
        "Cnt": 3140
    },
    {
        "Text": "The news caused alarm throughout the village",
        "Match": "FALSE",
        "Cnt": 3141
    },
    {
        "Text": "The policeman observed the man open the door",
        "Match": "FALSE",
        "Cnt": 3142
    },
    {
        "Text": "The thief is certain to be caught eventually",
        "Match": "FALSE",
        "Cnt": 3143
    },
    {
        "Text": "They fined him 5,000 yen for illegal parking",
        "Match": "FALSE",
        "Cnt": 3144
    },
    {
        "Text": "This is the village where my father was born",
        "Match": "FALSE",
        "Cnt": 3145
    },
    {
        "Text": "To distinguish right from wrong is difficult",
        "Match": "FALSE",
        "Cnt": 3146
    },
    {
        "Text": "Tom couldn't understand what Mary was saying",
        "Match": "FALSE",
        "Cnt": 3147
    },
    {
        "Text": "Tom couldn't understand what Mary was saying",
        "Match": "FALSE",
        "Cnt": 3148
    },
    {
        "Text": "Tom couldn't understand what Mary was saying",
        "Match": "FALSE",
        "Cnt": 3149
    },
    {
        "Text": "We took it for granted that he would join us",
        "Match": "FALSE",
        "Cnt": 3150
    },
    {
        "Text": "What is the difference between this and that?",
        "Match": "FALSE",
        "Cnt": 3151
    },
    {
        "Text": "What is the difference between this and that?",
        "Match": "FALSE",
        "Cnt": 3152
    },
    {
        "Text": "What will you be doing at this time tomorrow?",
        "Match": "FALSE",
        "Cnt": 3153
    },
    {
        "Text": "Whoever wins the race will receive the prize",
        "Match": "FALSE",
        "Cnt": 3154
    },
    {
        "Text": "You can buy whichever you like, but not both",
        "Match": "FALSE",
        "Cnt": 3155
    },
    {
        "Text": "As soon as he finished his work, he went home",
        "Match": "FALSE",
        "Cnt": 3156
    },
    {
        "Text": "Going out in this rain is out of the question",
        "Match": "FALSE",
        "Cnt": 3157
    },
    {
        "Text": "He is not the sort of guy who gives in easily",
        "Match": "FALSE",
        "Cnt": 3158
    },
    {
        "Text": "He took advantage of every opportunity he had",
        "Match": "FALSE",
        "Cnt": 3159
    },
    {
        "Text": "I don't want there to be any misunderstanding",
        "Match": "FALSE",
        "Cnt": 3160
    },
    {
        "Text": "I had a fight with my older brother yesterday",
        "Match": "FALSE",
        "Cnt": 3161
    },
    {
        "Text": "I had a fight with my older brother yesterday",
        "Match": "FALSE",
        "Cnt": 3162
    },
    {
        "Text": "I have tried innumerable times to contact him",
        "Match": "FALSE",
        "Cnt": 3163
    },
    {
        "Text": "I wonder where to hang the picture he gave me",
        "Match": "FALSE",
        "Cnt": 3164
    },
    {
        "Text": "I wrote down his name so I wouldn't forget it",
        "Match": "FALSE",
        "Cnt": 3165
    },
    {
        "Text": "I've been given until tomorrow to finish this",
        "Match": "FALSE",
        "Cnt": 3166
    },
    {
        "Text": "My father is my biggest source of inspiration",
        "Match": "FALSE",
        "Cnt": 3167
    },
    {
        "Text": "Please don't hesitate to ask me any questions",
        "Match": "FALSE",
        "Cnt": 3168
    },
    {
        "Text": "Please tell me your name and telephone number",
        "Match": "FALSE",
        "Cnt": 3169
    },
    {
        "Text": "She is busy at present and can't speak to you",
        "Match": "FALSE",
        "Cnt": 3170
    },
    {
        "Text": "She will give her picture to whoever wants it",
        "Match": "FALSE",
        "Cnt": 3171
    },
    {
        "Text": "Take back what you said about me being stingy",
        "Match": "FALSE",
        "Cnt": 3172
    },
    {
        "Text": "That can't be Mary",
        "Match": "FALSE",
        "Cnt": 3173
    },
    {
        "Text": "The drug smuggler was arrested at the airport",
        "Match": "FALSE",
        "Cnt": 3174
    },
    {
        "Text": "The instant he saw the policeman, he ran away",
        "Match": "FALSE",
        "Cnt": 3175
    },
    {
        "Text": "There is a limit to how much one can tolerate",
        "Match": "FALSE",
        "Cnt": 3176
    },
    {
        "Text": "They were about to leave when I arrived there",
        "Match": "FALSE",
        "Cnt": 3177
    },
    {
        "Text": "This car has been used for the past ten years",
        "Match": "FALSE",
        "Cnt": 3178
    },
    {
        "Text": "What time do you usually get up every morning?",
        "Match": "FALSE",
        "Cnt": 3179
    },
    {
        "Text": "You are fortunate to have such loving parents",
        "Match": "FALSE",
        "Cnt": 3180
    },
    {
        "Text": "You had better not go out in this bad weather",
        "Match": "FALSE",
        "Cnt": 3181
    },
    {
        "Text": "You make mistakes if you do things in a hurry",
        "Match": "FALSE",
        "Cnt": 3182
    },
    {
        "Text": "You should write it down before you forget it",
        "Match": "FALSE",
        "Cnt": 3183
    },
    {
        "Text": "You'll get a lot of presents on your birthday",
        "Match": "FALSE",
        "Cnt": 3184
    },
    {
        "Text": "Almost all Japanese boys like to play baseball",
        "Match": "FALSE",
        "Cnt": 3185
    },
    {
        "Text": "Can you tell me when to switch the machine off?",
        "Match": "FALSE",
        "Cnt": 3186
    },
    {
        "Text": "Don't forget to return the book to the library",
        "Match": "FALSE",
        "Cnt": 3187
    },
    {
        "Text": "He became a member of this club five years ago",
        "Match": "FALSE",
        "Cnt": 3188
    },
    {
        "Text": "He will commit suicide if he can't see his son",
        "Match": "FALSE",
        "Cnt": 3189
    },
    {
        "Text": "How can you tell good English from bad English?",
        "Match": "FALSE",
        "Cnt": 3190
    },
    {
        "Text": "I came upon an old friend of mine on the train",
        "Match": "FALSE",
        "Cnt": 3191
    },
    {
        "Text": "I have lots of work to clear up by the weekend",
        "Match": "FALSE",
        "Cnt": 3192
    },
    {
        "Text": "I have no idea to what extent I can trust them",
        "Match": "FALSE",
        "Cnt": 3193
    },
    {
        "Text": "I have no idea to what extent I can trust them",
        "Match": "FALSE",
        "Cnt": 3194
    },
    {
        "Text": "I saw a girl whose hair came down to her waist",
        "Match": "FALSE",
        "Cnt": 3195
    },
    {
        "Text": "I saw him go into the toilet a few minutes ago",
        "Match": "FALSE",
        "Cnt": 3196
    },
    {
        "Text": "India gained independence from Britain in 1947",
        "Match": "FALSE",
        "Cnt": 3197
    },
    {
        "Text": "Last week five students were absent from class",
        "Match": "FALSE",
        "Cnt": 3198
    },
    {
        "Text": "She reproached me for not answering the letter",
        "Match": "FALSE",
        "Cnt": 3199
    },
    {
        "Text": "Something must have happened to him on the way",
        "Match": "FALSE",
        "Cnt": 3200
    },
    {
        "Text": "Sometimes she tried talking to him about India",
        "Match": "FALSE",
        "Cnt": 3201
    },
    {
        "Text": "The reason which he gave is hard to understand",
        "Match": "FALSE",
        "Cnt": 3202
    },
    {
        "Text": "The station is located between these two towns",
        "Match": "FALSE",
        "Cnt": 3203
    },
    {
        "Text": "There are lots of things for us to think about",
        "Match": "FALSE",
        "Cnt": 3204
    },
    {
        "Text": "These grapes are so sour that I can't eat them",
        "Match": "FALSE",
        "Cnt": 3205
    },
    {
        "Text": "They booted him out of school for not studying",
        "Match": "FALSE",
        "Cnt": 3206
    },
    {
        "Text": "Thousands of foreigners visit Japan every year",
        "Match": "FALSE",
        "Cnt": 3207
    },
    {
        "Text": "Tom wants to know why you didn't call him back",
        "Match": "FALSE",
        "Cnt": 3208
    },
    {
        "Text": "We had no customers, so we shut the shop early",
        "Match": "FALSE",
        "Cnt": 3209
    },
    {
        "Text": "We have some new products we'd like you to see",
        "Match": "FALSE",
        "Cnt": 3210
    },
    {
        "Text": "We will have to call on our friends to help us",
        "Match": "FALSE",
        "Cnt": 3211
    },
    {
        "Text": "When did America become independent of England?",
        "Match": "FALSE",
        "Cnt": 3212
    },
    {
        "Text": "While I was in Taiwan, I made friends with him",
        "Match": "FALSE",
        "Cnt": 3213
    },
    {
        "Text": "Would you mind speaking a little softer please?",
        "Match": "FALSE",
        "Cnt": 3214
    },
    {
        "Text": "Will they go on strike again?\" \"I'm afraid so.",
        "Match": "FALSE",
        "Cnt": 3215
    },
    {
        "Text": "An old man was resting in the shade of the tree",
        "Match": "FALSE",
        "Cnt": 3216
    },
    {
        "Text": "Could you please speak a little bit more slowly?",
        "Match": "FALSE",
        "Cnt": 3217
    },
    {
        "Text": "Do you think he will be elected president again?",
        "Match": "FALSE",
        "Cnt": 3218
    },
    {
        "Text": "Frankly speaking, I don't want to work with him",
        "Match": "FALSE",
        "Cnt": 3219
    },
    {
        "Text": "He is a nice man, except that he talks too much",
        "Match": "FALSE",
        "Cnt": 3220
    },
    {
        "Text": "He left his parents when he was eight years old",
        "Match": "FALSE",
        "Cnt": 3221
    },
    {
        "Text": "He reminded his wife to wake him up at 7:00 a",
        "Match": "FALSE",
        "Cnt": 3222
    },
    {
        "Text": "He sent out the parcel the day before yesterday",
        "Match": "FALSE",
        "Cnt": 3223
    },
    {
        "Text": "He was respected both as a teacher and as a man",
        "Match": "FALSE",
        "Cnt": 3224
    },
    {
        "Text": "How long did it take you to translate this book?",
        "Match": "FALSE",
        "Cnt": 3225
    },
    {
        "Text": "I became friends with him while I was in Taiwan",
        "Match": "FALSE",
        "Cnt": 3226
    },
    {
        "Text": "I found it impossible to do the work in one day",
        "Match": "FALSE",
        "Cnt": 3227
    },
    {
        "Text": "I have never come across such a stubborn person",
        "Match": "FALSE",
        "Cnt": 3228
    },
    {
        "Text": "I have to learn many words and phrases by heart",
        "Match": "FALSE",
        "Cnt": 3229
    },
    {
        "Text": "I remember my mother's teaching me the alphabet",
        "Match": "FALSE",
        "Cnt": 3230
    },
    {
        "Text": "I thought that he had already finished the work",
        "Match": "FALSE",
        "Cnt": 3231
    },
    {
        "Text": "I was ill at ease because I didn't speak French",
        "Match": "FALSE",
        "Cnt": 3232
    },
    {
        "Text": "I was searching for something that didn't exist",
        "Match": "FALSE",
        "Cnt": 3233
    },
    {
        "Text": "I was surprised at the news of his sudden death",
        "Match": "FALSE",
        "Cnt": 3234
    },
    {
        "Text": "It is necessary for you to go there immediately",
        "Match": "FALSE",
        "Cnt": 3235
    },
    {
        "Text": "It is necessary for you to see a doctor at once",
        "Match": "FALSE",
        "Cnt": 3236
    },
    {
        "Text": "It makes no difference whether you agree or not",
        "Match": "FALSE",
        "Cnt": 3237
    },
    {
        "Text": "May I talk with you in private about the matter?",
        "Match": "FALSE",
        "Cnt": 3238
    },
    {
        "Text": "She had plenty of acquaintances, but no friends",
        "Match": "FALSE",
        "Cnt": 3239
    },
    {
        "Text": "The doctor told her that she should take a rest",
        "Match": "FALSE",
        "Cnt": 3240
    },
    {
        "Text": "They are in favor of the reform of the tax laws",
        "Match": "FALSE",
        "Cnt": 3241
    },
    {
        "Text": "This elevator does not go above the sixth floor",
        "Match": "FALSE",
        "Cnt": 3242
    },
    {
        "Text": "This machine is superior in quality to that one",
        "Match": "FALSE",
        "Cnt": 3243
    },
    {
        "Text": "Tomorrow is my birthday and I will be seventeen",
        "Match": "FALSE",
        "Cnt": 3244
    },
    {
        "Text": "Tomorrow is my birthday and I will be seventeen",
        "Match": "FALSE",
        "Cnt": 3245
    },
    {
        "Text": "When she was reading the letter, she looked sad",
        "Match": "FALSE",
        "Cnt": 3246
    },
    {
        "Text": "Why do you think soccer isn't popular in the US?",
        "Match": "FALSE",
        "Cnt": 3247
    },
    {
        "Text": "Will you exchange this sweater for a larger one?",
        "Match": "FALSE",
        "Cnt": 3248
    },
    {
        "Text": "Write back to me as soon as you get this letter",
        "Match": "FALSE",
        "Cnt": 3249
    },
    {
        "Text": "You will be all right again in a couple of days",
        "Match": "FALSE",
        "Cnt": 3250
    },
    {
        "Text": "You will be all right again in a couple of days",
        "Match": "FALSE",
        "Cnt": 3251
    },
    {
        "Text": "Do you think we should import rice from the U",
        "Match": "FALSE",
        "Cnt": 3252
    },
    {
        "Text": "He contracted malaria while living in the jungle",
        "Match": "FALSE",
        "Cnt": 3253
    },
    {
        "Text": "He left all his property to his wife in his will",
        "Match": "FALSE",
        "Cnt": 3254
    },
    {
        "Text": "He made such a long speech that we all got bored",
        "Match": "FALSE",
        "Cnt": 3255
    },
    {
        "Text": "I am of the opinion that he will never come back",
        "Match": "FALSE",
        "Cnt": 3256
    },
    {
        "Text": "I slept all day yesterday, because it was Sunday",
        "Match": "FALSE",
        "Cnt": 3257
    },
    {
        "Text": "I will tell him about it when he comes next time",
        "Match": "FALSE",
        "Cnt": 3258
    },
    {
        "Text": "I will tell him about it when he comes next time",
        "Match": "FALSE",
        "Cnt": 3259
    },
    {
        "Text": "If possible, I'd like to travel around the world",
        "Match": "FALSE",
        "Cnt": 3260
    },
    {
        "Text": "If the coffee is too strong, add some more water",
        "Match": "FALSE",
        "Cnt": 3261
    },
    {
        "Text": "London is one of the largest cities in the world",
        "Match": "FALSE",
        "Cnt": 3262
    },
    {
        "Text": "London, the capital of England, is on the Thames",
        "Match": "FALSE",
        "Cnt": 3263
    },
    {
        "Text": "The money should be distributed to those in need",
        "Match": "FALSE",
        "Cnt": 3264
    },
    {
        "Text": "There is no hurry about returning the book to me",
        "Match": "FALSE",
        "Cnt": 3265
    },
    {
        "Text": "There weren't any children in the park yesterday",
        "Match": "FALSE",
        "Cnt": 3266
    },
    {
        "Text": "They wanted to get married as soon as they could",
        "Match": "FALSE",
        "Cnt": 3267
    },
    {
        "Text": "They won't believe me even if I swear it is true",
        "Match": "FALSE",
        "Cnt": 3268
    },
    {
        "Text": "We cannot decide whether to go to college or not",
        "Match": "FALSE",
        "Cnt": 3269
    },
    {
        "Text": "You have the freedom to travel wherever you like",
        "Match": "FALSE",
        "Cnt": 3270
    },
    {
        "Text": "Father objected to my going to the mountain alone",
        "Match": "FALSE",
        "Cnt": 3271
    },
    {
        "Text": "He is confident that he will pass the examination",
        "Match": "FALSE",
        "Cnt": 3272
    },
    {
        "Text": "He jumped into water without removing his clothes",
        "Match": "FALSE",
        "Cnt": 3273
    },
    {
        "Text": "I do not know for certain what she is going to do",
        "Match": "FALSE",
        "Cnt": 3274
    },
    {
        "Text": "I have a gut feeling that Tom won't pass the test",
        "Match": "FALSE",
        "Cnt": 3275
    },
    {
        "Text": "I have a gut feeling that Tom won't pass the test",
        "Match": "FALSE",
        "Cnt": 3276
    },
    {
        "Text": "I have nothing to say with regard to that problem",
        "Match": "FALSE",
        "Cnt": 3277
    },
    {
        "Text": "I have nothing to say with regard to that problem",
        "Match": "FALSE",
        "Cnt": 3278
    },
    {
        "Text": "I know her by sight, but I've never spoken to her",
        "Match": "FALSE",
        "Cnt": 3279
    },
    {
        "Text": "I learned to play guitar when I was ten years old",
        "Match": "FALSE",
        "Cnt": 3280
    },
    {
        "Text": "I spent the whole afternoon chatting with friends",
        "Match": "FALSE",
        "Cnt": 3281
    },
    {
        "Text": "I stayed at home all day instead of going to work",
        "Match": "FALSE",
        "Cnt": 3282
    },
    {
        "Text": "I think there has been some misunderstanding here",
        "Match": "FALSE",
        "Cnt": 3283
    },
    {
        "Text": "I'm not saying that your answers are always wrong",
        "Match": "FALSE",
        "Cnt": 3284
    },
    {
        "Text": "India is the seventh largest country in the world",
        "Match": "FALSE",
        "Cnt": 3285
    },
    {
        "Text": "It was so noisy that I couldn't make myself heard",
        "Match": "FALSE",
        "Cnt": 3286
    },
    {
        "Text": "It's an absolute waste of time to wait any longer",
        "Match": "FALSE",
        "Cnt": 3287
    },
    {
        "Text": "Many people encouraged me to fulfill my ambitions",
        "Match": "FALSE",
        "Cnt": 3288
    },
    {
        "Text": "My mother is constantly forgetting people's names",
        "Match": "FALSE",
        "Cnt": 3289
    },
    {
        "Text": "She is very careful, so she seldom makes mistakes",
        "Match": "FALSE",
        "Cnt": 3290
    },
    {
        "Text": "The old man sat in the chair with his eyes closed",
        "Match": "FALSE",
        "Cnt": 3291
    },
    {
        "Text": "This theory is too difficult for me to comprehend",
        "Match": "FALSE",
        "Cnt": 3292
    },
    {
        "Text": "To my surprise, she could not answer the question",
        "Match": "FALSE",
        "Cnt": 3293
    },
    {
        "Text": "What number should I call in case of an emergency?",
        "Match": "FALSE",
        "Cnt": 3294
    },
    {
        "Text": "I advise you not to borrow money from your friends",
        "Match": "FALSE",
        "Cnt": 3295
    },
    {
        "Text": "I don't like the polluted atmosphere of big cities",
        "Match": "FALSE",
        "Cnt": 3296
    },
    {
        "Text": "I go to the office by bicycle except on rainy days",
        "Match": "FALSE",
        "Cnt": 3297
    },
    {
        "Text": "I had hardly reached the school when the bell rang",
        "Match": "FALSE",
        "Cnt": 3298
    },
    {
        "Text": "I want to clean the house before my parents return",
        "Match": "FALSE",
        "Cnt": 3299
    },
    {
        "Text": "I was kept waiting for a long time at the hospital",
        "Match": "FALSE",
        "Cnt": 3300
    },
    {
        "Text": "India was governed by Great Britain for many years",
        "Match": "FALSE",
        "Cnt": 3301
    },
    {
        "Text": "International trade is vital for healthy economies",
        "Match": "FALSE",
        "Cnt": 3302
    },
    {
        "Text": "It is said that he is the richest man in the world",
        "Match": "FALSE",
        "Cnt": 3303
    },
    {
        "Text": "It's already eleven o'clock",
        "Match": "FALSE",
        "Cnt": 3304
    },
    {
        "Text": "The bat was stolen yesterday, along with the balls",
        "Match": "FALSE",
        "Cnt": 3305
    },
    {
        "Text": "The people of London are very proud of this bridge",
        "Match": "FALSE",
        "Cnt": 3306
    },
    {
        "Text": "This is the house where I lived when I was a child",
        "Match": "FALSE",
        "Cnt": 3307
    },
    {
        "Text": "We are responsible for your protection from now on",
        "Match": "FALSE",
        "Cnt": 3308
    },
    {
        "Text": "We arrived at the station as the train was leaving",
        "Match": "FALSE",
        "Cnt": 3309
    },
    {
        "Text": "We must not speak ill of others behind their backs",
        "Match": "FALSE",
        "Cnt": 3310
    },
    {
        "Text": "We will have to take off our shoes before going in",
        "Match": "FALSE",
        "Cnt": 3311
    },
    {
        "Text": "When he arrives in Tokyo, I'll call you right away",
        "Match": "FALSE",
        "Cnt": 3312
    },
    {
        "Text": "Why do you talk about him as if he were an old man?",
        "Match": "FALSE",
        "Cnt": 3313
    },
    {
        "Text": "After some hesitation, he laid the book on the desk",
        "Match": "FALSE",
        "Cnt": 3314
    },
    {
        "Text": "I will get through with my homework before he comes",
        "Match": "FALSE",
        "Cnt": 3315
    },
    {
        "Text": "I will never forget your kindness so long as I live",
        "Match": "FALSE",
        "Cnt": 3316
    },
    {
        "Text": "Look carefully",
        "Match": "FALSE",
        "Cnt": 3317
    },
    {
        "Text": "A selfish man thinks of nothing but his own feelings",
        "Match": "FALSE",
        "Cnt": 3318
    },
    {
        "Text": "A selfish man thinks of nothing but his own feelings",
        "Match": "FALSE",
        "Cnt": 3319
    },
    {
        "Text": "All the flowers in the garden died for lack of water",
        "Match": "FALSE",
        "Cnt": 3320
    },
    {
        "Text": "I ran into an old friend of mine outside the station",
        "Match": "FALSE",
        "Cnt": 3321
    },
    {
        "Text": "I spent hours looking for the key that I had dropped",
        "Match": "FALSE",
        "Cnt": 3322
    },
    {
        "Text": "I want this photograph developed as soon as possible",
        "Match": "FALSE",
        "Cnt": 3323
    },
    {
        "Text": "I'll arrange for someone to pick you up at your home",
        "Match": "FALSE",
        "Cnt": 3324
    },
    {
        "Text": "It is dangerous to ride a motorbike without a helmet",
        "Match": "FALSE",
        "Cnt": 3325
    },
    {
        "Text": "It may not be necessary for us to go to that meeting",
        "Match": "FALSE",
        "Cnt": 3326
    },
    {
        "Text": "It would be better for you not to ask him for advice",
        "Match": "FALSE",
        "Cnt": 3327
    },
    {
        "Text": "My hands are dirty",
        "Match": "FALSE",
        "Cnt": 3328
    },
    {
        "Text": "She gave me a large room while I stayed at her house",
        "Match": "FALSE",
        "Cnt": 3329
    },
    {
        "Text": "The government started a program to promote industry",
        "Match": "FALSE",
        "Cnt": 3330
    },
    {
        "Text": "The majority of the committee voted against the bill",
        "Match": "FALSE",
        "Cnt": 3331
    },
    {
        "Text": "The other day her mother passed away in the hospital",
        "Match": "FALSE",
        "Cnt": 3332
    },
    {
        "Text": "The population of China is larger than that of India",
        "Match": "FALSE",
        "Cnt": 3333
    },
    {
        "Text": "The speed of the spread of AIDS is horrifyingly fast",
        "Match": "FALSE",
        "Cnt": 3334
    },
    {
        "Text": "When you can't do what you want, you do what you can",
        "Match": "FALSE",
        "Cnt": 3335
    },
    {
        "Text": "French is spoken in France and in some parts of Italy",
        "Match": "FALSE",
        "Cnt": 3336
    },
    {
        "Text": "I got up early, so that I could catch the first train",
        "Match": "FALSE",
        "Cnt": 3337
    },
    {
        "Text": "I was caught in a shower and was drenched to the skin",
        "Match": "FALSE",
        "Cnt": 3338
    },
    {
        "Text": "In Japan there aren't any lakes bigger than Lake Biwa",
        "Match": "FALSE",
        "Cnt": 3339
    },
    {
        "Text": "In case I can't come, I'll give you a call beforehand",
        "Match": "FALSE",
        "Cnt": 3340
    },
    {
        "Text": "Make sure to turn off all the lights before going out",
        "Match": "FALSE",
        "Cnt": 3341
    },
    {
        "Text": "Maybe I am unhappy, but I don't intend to kill myself",
        "Match": "FALSE",
        "Cnt": 3342
    },
    {
        "Text": "Seen from the sky, the river looked like a huge snake",
        "Match": "FALSE",
        "Cnt": 3343
    },
    {
        "Text": "The king ordered that the prisoner should be set free",
        "Match": "FALSE",
        "Cnt": 3344
    },
    {
        "Text": "The patient was lying in the bed with his eyes closed",
        "Match": "FALSE",
        "Cnt": 3345
    },
    {
        "Text": "The police arrested the man who had murdered the girl",
        "Match": "FALSE",
        "Cnt": 3346
    },
    {
        "Text": "We are supposed to take off our shoes at the entrance",
        "Match": "FALSE",
        "Cnt": 3347
    },
    {
        "Text": "We communicate with each other by telephone every day",
        "Match": "FALSE",
        "Cnt": 3348
    },
    {
        "Text": "We have decided on leaving this town tomorrow morning",
        "Match": "FALSE",
        "Cnt": 3349
    },
    {
        "Text": "With a little more patience, you would have succeeded",
        "Match": "FALSE",
        "Cnt": 3350
    },
    {
        "Text": "You had better chain up the dog so that he won't bite",
        "Match": "FALSE",
        "Cnt": 3351
    },
    {
        "Text": "You should not speak ill of others behind their backs",
        "Match": "FALSE",
        "Cnt": 3352
    },
    {
        "Text": "You'll have to work hard if you want to pass the exam",
        "Match": "FALSE",
        "Cnt": 3353
    },
    {
        "Text": "A committee has been set up to investigate the problem",
        "Match": "FALSE",
        "Cnt": 3354
    },
    {
        "Text": "According to TV news, there was a plane crash in India",
        "Match": "FALSE",
        "Cnt": 3355
    },
    {
        "Text": "As the saying goes, \"Nothing ventured, nothing gained",
        "Match": "FALSE",
        "Cnt": 3356
    },
    {
        "Text": "He never takes into account the fact that I am very busy",
        "Match": "FALSE",
        "Cnt": 3357
    },
    {
        "Text": "I can barely afford to buy enough food to feed my family",
        "Match": "FALSE",
        "Cnt": 3358
    },
    {
        "Text": "It is essential to have good command of English nowadays",
        "Match": "FALSE",
        "Cnt": 3359
    },
    {
        "Text": "Mumbai is the capital of the Indian state of Maharashtra",
        "Match": "FALSE",
        "Cnt": 3360
    },
    {
        "Text": "Parents are responsible for the safety of their children",
        "Match": "FALSE",
        "Cnt": 3361
    },
    {
        "Text": "Parents are responsible for the safety of their children",
        "Match": "FALSE",
        "Cnt": 3362
    },
    {
        "Text": "Some of the boys are fishing and the others are swimming",
        "Match": "FALSE",
        "Cnt": 3363
    },
    {
        "Text": "That child is only four, but he can already count to 100",
        "Match": "FALSE",
        "Cnt": 3364
    },
    {
        "Text": "The reason why you failed is you did not try hard enough",
        "Match": "FALSE",
        "Cnt": 3365
    },
    {
        "Text": "He couldn't sleep because of the noise outside his window",
        "Match": "FALSE",
        "Cnt": 3366
    },
    {
        "Text": "He intends to devote his life to curing the sick in India",
        "Match": "FALSE",
        "Cnt": 3367
    },
    {
        "Text": "I have so many clothes I don't know what to wear tomorrow",
        "Match": "FALSE",
        "Cnt": 3368
    },
    {
        "Text": "I tried to give her some money, but she wouldn't take any",
        "Match": "FALSE",
        "Cnt": 3369
    },
    {
        "Text": "It makes no difference to me whether you are rich or poor",
        "Match": "FALSE",
        "Cnt": 3370
    },
    {
        "Text": "Japan is one of the greatest economic powers in the world",
        "Match": "FALSE",
        "Cnt": 3371
    },
    {
        "Text": "On the fifteenth of August, thousands of people fly kites",
        "Match": "FALSE",
        "Cnt": 3372
    },
    {
        "Text": "There is nothing on earth that is not affected by the sun",
        "Match": "FALSE",
        "Cnt": 3373
    },
    {
        "Text": "There is nothing on earth that is not affected by the sun",
        "Match": "FALSE",
        "Cnt": 3374
    },
    {
        "Text": "We must hurry if we want to arrive at the station on time",
        "Match": "FALSE",
        "Cnt": 3375
    },
    {
        "Text": "According to my calculation, she should be in India by now",
        "Match": "FALSE",
        "Cnt": 3376
    },
    {
        "Text": "Although they are twins, they have few interests in common",
        "Match": "FALSE",
        "Cnt": 3377
    },
    {
        "Text": "Cross off the names of the people who have paid their dues",
        "Match": "FALSE",
        "Cnt": 3378
    },
    {
        "Text": "He deliberately ignored me when I passed him in the street",
        "Match": "FALSE",
        "Cnt": 3379
    },
    {
        "Text": "He promised me that he would be more careful in the future",
        "Match": "FALSE",
        "Cnt": 3380
    },
    {
        "Text": "Seeing that movie is something like taking a trip to India",
        "Match": "FALSE",
        "Cnt": 3381
    },
    {
        "Text": "The authorities have been hiding the facts from the public",
        "Match": "FALSE",
        "Cnt": 3382
    },
    {
        "Text": "The instant he opened the door, he smelt something burning",
        "Match": "FALSE",
        "Cnt": 3383
    },
    {
        "Text": "What is the difference between imitation and real diamonds?",
        "Match": "FALSE",
        "Cnt": 3384
    },
    {
        "Text": "By the time the sun sets, we will arrive at the destination",
        "Match": "FALSE",
        "Cnt": 3385
    },
    {
        "Text": "Covered with dust, the doll stood in the corner of the room",
        "Match": "FALSE",
        "Cnt": 3386
    },
    {
        "Text": "He finished his dinner because he didn't like to waste food",
        "Match": "FALSE",
        "Cnt": 3387
    },
    {
        "Text": "Nobody likes him, because he is always blowing his own horn",
        "Match": "FALSE",
        "Cnt": 3388
    },
    {
        "Text": "They have demanded that all copies of the book be destroyed",
        "Match": "FALSE",
        "Cnt": 3389
    },
    {
        "Text": "What do you call a man who takes care of sheep in the field?",
        "Match": "FALSE",
        "Cnt": 3390
    },
    {
        "Text": "When he would not give them higher pay, they went on strike",
        "Match": "FALSE",
        "Cnt": 3391
    },
    {
        "Text": "I feel sad when I think about all the people who die in wars",
        "Match": "FALSE",
        "Cnt": 3392
    },
    {
        "Text": "It looks like rain",
        "Match": "FALSE",
        "Cnt": 3393
    },
    {
        "Text": "The fisherman exaggerated the size of the fish he had caught",
        "Match": "FALSE",
        "Cnt": 3394
    },
    {
        "Text": "The new government promised to rid the country of corruption",
        "Match": "FALSE",
        "Cnt": 3395
    },
    {
        "Text": "His shoes were so old that his toes were sticking out of them",
        "Match": "FALSE",
        "Cnt": 3396
    },
    {
        "Text": "If it had not been for her help, you would never have done it",
        "Match": "FALSE",
        "Cnt": 3397
    },
    {
        "Text": "Instead of cleaning the house today, I think I'll take a walk",
        "Match": "FALSE",
        "Cnt": 3398
    },
    {
        "Text": "It has been raining on and off since the day before yesterday",
        "Match": "FALSE",
        "Cnt": 3399
    },
    {
        "Text": "It will take me no less than 10 hours to prepare for the exam",
        "Match": "FALSE",
        "Cnt": 3400
    },
    {
        "Text": "Mary resembles her mother in appearance, but not in character",
        "Match": "FALSE",
        "Cnt": 3401
    },
    {
        "Text": "This morning the weather was so bad that I had to take a taxi",
        "Match": "FALSE",
        "Cnt": 3402
    },
    {
        "Text": "When he is in trouble, he always turns to his sister for help",
        "Match": "FALSE",
        "Cnt": 3403
    },
    {
        "Text": "How long has it been since you gave up teaching at that school?",
        "Match": "FALSE",
        "Cnt": 3404
    },
    {
        "Text": "I don't think I shall get through all this work this afternoon",
        "Match": "FALSE",
        "Cnt": 3405
    },
    {
        "Text": "I missed my stop",
        "Match": "FALSE",
        "Cnt": 3406
    },
    {
        "Text": "To investigate the incident would take us at least three weeks",
        "Match": "FALSE",
        "Cnt": 3407
    },
    {
        "Text": "The older you are, the more difficult it is to learn a language",
        "Match": "FALSE",
        "Cnt": 3408
    },
    {
        "Text": "Electric power companies are seeking to reduce their use of coal",
        "Match": "FALSE",
        "Cnt": 3409
    },
    {
        "Text": "It is not till we lose our health that we realize its true value",
        "Match": "FALSE",
        "Cnt": 3410
    },
    {
        "Text": "It is not till we lose our health that we realize its true value",
        "Match": "FALSE",
        "Cnt": 3411
    },
    {
        "Text": "She wanted to have her hair cut, but her mother wouldn't let her",
        "Match": "FALSE",
        "Cnt": 3412
    },
    {
        "Text": "You might as well read a novel instead of staring at the ceiling",
        "Match": "FALSE",
        "Cnt": 3413
    },
    {
        "Text": "Don't you think the air conditioner is turned up too high in here?",
        "Match": "FALSE",
        "Cnt": 3414
    },
    {
        "Text": "It will not make much difference whether you go today or tomorrow",
        "Match": "FALSE",
        "Cnt": 3415
    },
    {
        "Text": "The boy gathered a handful of peanuts and put them in a small box",
        "Match": "FALSE",
        "Cnt": 3416
    },
    {
        "Text": "There's a rumor in the air that the firm is going into bankruptcy",
        "Match": "FALSE",
        "Cnt": 3417
    },
    {
        "Text": "When you leave the room, please make sure you turn off the lights",
        "Match": "FALSE",
        "Cnt": 3418
    },
    {
        "Text": "If Tom doesn't help us, we'll never be able to finish this on time",
        "Match": "FALSE",
        "Cnt": 3419
    },
    {
        "Text": "You must not be afraid of making mistakes when learning a language",
        "Match": "FALSE",
        "Cnt": 3420
    },
    {
        "Text": "If you have a time, could you translate some sentences below, please?",
        "Match": "FALSE",
        "Cnt": 3421
    },
    {
        "Text": "The company gave him a gold watch in acknowledgement of his services",
        "Match": "FALSE",
        "Cnt": 3422
    },
    {
        "Text": "She cut the cake into six pieces and gave one to each of the children",
        "Match": "FALSE",
        "Cnt": 3423
    },
    {
        "Text": "The twin girls are so much alike that I can't tell one from the other",
        "Match": "FALSE",
        "Cnt": 3424
    },
    {
        "Text": "I make it a practice to help my brother with his homework after supper",
        "Match": "FALSE",
        "Cnt": 3425
    },
    {
        "Text": "Instead of laying off these workers, why don't we just cut their hours?",
        "Match": "FALSE",
        "Cnt": 3426
    },
    {
        "Text": "Our parents took care of us and now it's our turn to take care of them",
        "Match": "FALSE",
        "Cnt": 3427
    },
    {
        "Text": "The thieves pulled open all the drawers of the desk in search of money",
        "Match": "FALSE",
        "Cnt": 3428
    },
    {
        "Text": "I learned to drive a car and got a driver's license when I was eighteen",
        "Match": "FALSE",
        "Cnt": 3429
    },
    {
        "Text": "Father kept in touch with us by mail and telephone while he was overseas",
        "Match": "FALSE",
        "Cnt": 3430
    },
    {
        "Text": "Mother Teresa was a Catholic nun who lived and worked in Calcutta, India",
        "Match": "FALSE",
        "Cnt": 3431
    },
    {
        "Text": "George Washington was the first president of the Unites States of America",
        "Match": "FALSE",
        "Cnt": 3432
    },
    {
        "Text": "In 1951, Sister Teresa was sent to Calcutta, then the largest city in India",
        "Match": "FALSE",
        "Cnt": 3433
    },
    {
        "Text": "Mother Teresa used the prize money for her work in India and around the world",
        "Match": "FALSE",
        "Cnt": 3434
    },
    {
        "Text": "If you go to that supermarket, you can buy most things you use in your daily life",
        "Match": "FALSE",
        "Cnt": 3435
    },
    {
        "Text": "The passengers who were injured in the accident were taken to the nearest hospital",
        "Match": "FALSE",
        "Cnt": 3436
    },
    {
        "Text": "Democracy is the worst form of government, except all the others that have been tried",
        "Match": "FALSE",
        "Cnt": 3437
    },
    {
        "Text": "If my boy had not been killed in the traffic accident, he would be a college student now",
        "Match": "FALSE",
        "Cnt": 3438
    },
    {
        "Text": "When I was a kid, touching bugs didn't bother me a bit",
        "Match": "FALSE",
        "Cnt": 3439
    },
    {
        "Text": "Make a good translation of the sentence that you are translating",
        "Match": "FALSE",
        "Cnt": 3440
    }
];
