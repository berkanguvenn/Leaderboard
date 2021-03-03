# Leaderboard
How to use
POST
•	Create user:

http://143.198.56.129:4580/user/create          Create user
Sending a JSON body:
{
	
        "display_name": "6e-797a-4201-bf9a-3bd0a75d3e4f",
                  "country": "en",
                  "points": 99847,
                  "rank": 1,
                  "user_id": "e684dc6e-797a-4201-bf9a-3bd0a75d3e4f"


}

http://143.198.56.129:4580/score/submit            Score Submit
    {
        "user_id": "8a404936-186b-4042-b9ff-f6f0bb0a118e",
        "timestamp": 1573256745,
        "score_worth": 164638678
    }



http://143.198.56.129:4580/user/test 

Create Random Gamers

    {
        "count": 500
    }


GET
http://143.198.56.129:4580/leaderboard  Show all user rank 
 
 {
        "display_name": "6e-797a-4201-bf9a-3bd0a75d3e4f",
        "country": "en",
        "points": 99847,
        "rank": 1,
        "user_id": "e684dc6e-797a-4201-bf9a-3bd0a75d3e4f"
    },
    {
        "display_name": "fc-0104-4108-87d4-e3a94cbcb46a",
        "country": "tr",
        "points": 99177,
        "rank": 2,
        "user_id": "f37657fc-0104-4108-87d4-e3a94cbcb46a"
    },
    {
        "display_name": "ef-d4ee-4e64-b0f9-3c89c522071b",
        "country": "en",
        "points": 98702,
        "rank": 3,
        "user_id": "41c474ef-d4ee-4e64-b0f9-3c89c522071b"
    },
    {
        "display_name": "ef-66cb-41b5-a755-c3af495c1dcf",
        "country": "en",
        "points": 98594,
        "rank": 4,
        "user_id": "339a30ef-66cb-41b5-a755-c3af495c1dcf"
    },
    {
        "display_name": "f3-3bc5-4cbc-a0a3-e3b58851702b",
        "country": "tr",
        "points": 98528,
        "rank": 5,
        "user_id": "238d41f3-3bc5-4cbc-a0a3-e3b58851702b"
    },


http://143.198.56.129:4580/leaderboard/en  Show users rank in their country 


{
        "display_name": "fc-0104-4108-87d4-e3a94cbcb46a",
        "country": "tr",
        "points": 99177,
        "rank": 2,
        "user_id": "f37657fc-0104-4108-87d4-e3a94cbcb46a"
    },
    {
        "display_name": "f3-3bc5-4cbc-a0a3-e3b58851702b",
        "country": "tr",
        "points": 98528,
        "rank": 5,
        "user_id": "238d41f3-3bc5-4cbc-a0a3-e3b58851702b"
    },
    {
        "display_name": "1e-d4b5-4a67-a9e1-11c3a3719d19",
        "country": "tr",
        "points": 98474,
        "rank": 6,
        "user_id": "aff4b51e-d4b5-4a67-a9e1-11c3a3719d19"
    },
    {
        "display_name": "c9-075b-4e53-9d6e-054175ed5274",
        "country": "tr",
        "points": 97584,
        "rank": 12,
        "user_id": "9ac8e7c9-075b-4e53-9d6e-054175ed5274"
    },


http://143.198.56.129:4580/user/profile/e684dc6e-797a-4201-bf9a-3bd0a75d3e4f Show user by user_id

  {
    "display_name": "6e-797a-4201-bf9a-3bd0a75d3e4f",
    "country": "en",
    "points": 99847,
    "rank": 1,
    "user_id": "e684dc6e-797a-4201-bf9a-3bd0a75d3e4f"
}


 




http://143.198.56.129:4580/leaderboard/5/9 show gamers between two ranks 	

[
    {
        "display_name": "f3-3bc5-4cbc-a0a3-e3b58851702b",
        "country": "tr",
        "points": 98528,
        "rank": 5,
        "user_id": "238d41f3-3bc5-4cbc-a0a3-e3b58851702b"
    },
    {
        "display_name": "1e-d4b5-4a67-a9e1-11c3a3719d19",
        "country": "tr",
        "points": 98474,
        "rank": 6,
        "user_id": "aff4b51e-d4b5-4a67-a9e1-11c3a3719d19"
    },
    {
        "display_name": "10-d2fb-4c93-9656-9e1c69bd16f9",
        "country": "en",
        "points": 98343,
        "rank": 7,
        "user_id": "38ff9310-d2fb-4c93-9656-9e1c69bd16f9"
    },
    {
        "display_name": "84-a870-4b2f-bf6f-c0fef6225ce7",
        "country": "en",
        "points": 98059,
        "rank": 8,
        "user_id": "21784684-a870-4b2f-bf6f-c0fef6225ce7"
    },
    {
        "display_name": "ed-b770-4495-8bb6-2a92d9a04d35",
        "country": "en",
        "points": 98007,
        "rank": 9,
        "user_id": "013f44ed-b770-4495-8bb6-2a92d9a04d35"
    }
]


http://143.198.56.129:4580/leaderboard/tr/1/10 show gamers rank in their country top 10

[
    {
        "display_name": "fc-0104-4108-87d4-e3a94cbcb46a",
        "country": "tr",
        "points": 99177,
        "rank": 2,
        "user_id": "f37657fc-0104-4108-87d4-e3a94cbcb46a"
    },
    {
        "display_name": "f3-3bc5-4cbc-a0a3-e3b58851702b",
        "country": "tr",
        "points": 98528,
        "rank": 5,
        "user_id": "238d41f3-3bc5-4cbc-a0a3-e3b58851702b"
    },
    {
        "display_name": "1e-d4b5-4a67-a9e1-11c3a3719d19",
        "country": "tr",
        "points": 98474,
        "rank": 6,
        "user_id": "aff4b51e-d4b5-4a67-a9e1-11c3a3719d19"
    },
    {
        "display_name": "c9-075b-4e53-9d6e-054175ed5274",
        "country": "tr",
        "points": 97584,
        "rank": 12,
        "user_id": "9ac8e7c9-075b-4e53-9d6e-054175ed5274"
    },
    {
        "display_name": "26-7368-44e4-bea9-4c4d9049cb24",
        "country": "tr",
        "points": 96683,
        "rank": 14,
        "user_id": "6bc06e26-7368-44e4-bea9-4c4d9049cb24"
    },
    {
        "display_name": "70-ac2c-4f2b-8909-453790615d45",
        "country": "tr",
        "points": 96524,
        "rank": 15,
        "user_id": "ee242a70-ac2c-4f2b-8909-453790615d45"
    },
    {
        "display_name": "d1-c1d3-471b-b7b2-5b2f414f4ac3",
        "country": "tr",
        "points": 95442,
        "rank": 17,
        "user_id": "034799d1-c1d3-471b-b7b2-5b2f414f4ac3"
    },
    {
        "display_name": "da-e9ee-4671-8eaf-8a926e1b6f6f",
        "country": "tr",
        "points": 93424,
        "rank": 23,
        "user_id": "458c27da-e9ee-4671-8eaf-8a926e1b6f6f"
    },
    {
        "display_name": "36-1e28-483d-a675-02aee9885069",
        "country": "tr",
        "points": 93329,
        "rank": 24,
        "user_id": "d4da8d36-1e28-483d-a675-02aee9885069"
    },
    {
        "display_name": "7d-3251-45d4-b0c0-ad68c90f30f9",
        "country": "tr",
        "points": 92924,
        "rank": 26,
        "user_id": "0398117d-3251-45d4-b0c0-ad68c90f30f9"
    }
]









