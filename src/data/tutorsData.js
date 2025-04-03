const tutorsData = [
    {
      id: 1,
      name: "Jane Smith",
      title: "English Literature Specialist",
      email: "JaneSmith13@ufar.com",
      phoneNum: "+374 55 123456",
      subjects: [
        "Math", 
        "Physics"
    ],
      rating: 4.8,
      location: "Remote",
      price: "$30/hour",
      bio: "Passionate about helping students excel in math and physics.",
      experience: "5+ years of teaching experience.",
      qualifications: "MSc in Mathematics from XYZ University.",
      profilePicture: "/tutor1.jpg",
      reviews: [
        { user: "Alice", rating: 5, comment: "Great tutor, very helpful!" },
        { user: "Bob", rating: 4.5, comment: "Explains concepts clearly." },
      ],
    },
    {
      id: 2,
      name: "John Doe",
      title: "Expert Math Tutor",
      email: "johndoe@ufar.com",
      phoneNum: "+374 55 123456",
      subjects: [
        "English", 
        "Writing"],
      rating: 4.5,
      location: "Yerevan, Armenia",
      price: "$25/hour",
      bio: "Helping students master English and creative writing.",
      experience: "3+ years of teaching experience.",
      qualifications: "BA in English Literature from ABC University.",
      profilePicture: "/tutor2.jpg",
      reviews: [
        { user: "Charlie", rating: 5, comment: "Very knowledgeable and patient." },
        { user: "Diana", rating: 4.5, comment: "Helped me improve my writing skills." },
      ],
    },
    {
          id: 3,
          name: "Ariana Grande",
          title: "Professional English Tutor",
          email: "johnsmith@ufar.com",
          phoneNum: "+374 55 987654",
          subjects: ["English", "French"],
          rating: "4.7",
          location: "Yerevan, Armenia",
          price: "$30/hour",
          bio: "Helping students master English and French fluency.",
          experience: "6+ years of teaching experience.",
          qualifications: "BA in English Language from XYZ University.",
          profilePicture: "/tutor3.jpg",
          reviews: [
            { user: "Emma", rating: "4.8", comment: "Very engaging and helpful!" },
            { user: "Oliver", rating: "4.7", comment: "Improved my pronunciation a lot." }
          ]
        },
        {
          id: 4,
          name: "Anna Petrosyan",
          title: "Russian Language Specialist",
          email: "annapetrosyan@ufar.com",
          phoneNum: "+374 44 223344",
          subjects: ["Russian", "Armenian Language and Literature"],
          rating: "4.9",
          location: "Vanadzor, Armenia",
          price: "$28/hour",
          bio: "Teaching Russian and Armenian with a cultural approach.",
          experience: "7+ years of tutoring experience.",
          qualifications: "MA in Linguistics from ABC University.",
          profilePicture: "/tutor4.jpg",
          reviews: [
            { user: "Daniel", rating: "5", comment: "Very detailed and patient!" },
            { user: "Maria", rating: "4.8", comment: "Helped me a lot with grammar." }
          ]
        },
        {
          id: 5,
          name: "Liana Grigoryan",
          title: "Chemistry and Physics Tutor",
          email: "michaelgrigoryan@ufar.com",
          phoneNum: "+374 55 556677",
          subjects: ["Chemistry", "Physics"],
          rating: "4.6",
          location: "Yerevan, Armenia",
          price: "$32/hour",
          bio: "Making science easy to understand and fun.",
          experience: "5+ years of tutoring experience.",
          qualifications: "BSc in Chemistry from DEF University.",
          profilePicture: "/tutor5.jpg",
          reviews: [
            { user: "Noah", rating: "4.7", comment: "Explains complex topics very well." },
            { user: "Sophia", rating: "4.6", comment: "Helped me improve my lab skills." }
          ]
        },
        {
          id: 6,
          name: "Sophie Müller",
          title: "German Language Tutor",
          email: "sophiemuller@ufar.com",
          phoneNum: "+374 44 998877",
          subjects: ["German", "French"],
          rating: "4.8",
          location: "Gyumri, Armenia",
          price: "$27/hour",
          bio: "Helping students master German and French effortlessly.",
          experience: "6+ years of tutoring experience.",
          qualifications: "BA in German Studies from LMN University.",
          profilePicture: "/tutor6.jpg",
          reviews: [
            { user: "Lucas", rating: "4.9", comment: "Very interactive lessons!" },
            { user: "Amelia", rating: "4.7", comment: "Made German so much easier for me." }
          ]
        },
        {
          id: 7,
          name: "David Karapetyan",
          title: "Mathematics and Physics Tutor",
          email: "davidkarapetyan@ufar.com",
          phoneNum: "+374 33 112233",
          subjects: ["Mathematics", "Physics"],
          rating: "4.9",
          location: "Yerevan, Armenia",
          price: "$35/hour",
          bio: "Passionate about teaching Math and Physics with real-life examples.",
          experience: "8+ years of tutoring experience.",
          qualifications: "MSc in Physics from UVW University.",
          profilePicture: "/tutor7.jpg",
          reviews: [
            { user: "Henry", rating: "5", comment: "Best tutor for difficult problems!" },
            { user: "Charlotte", rating: "4.9", comment: "Helped me improve my math skills significantly." }
          ]
        },
        {
          id: 8,
          name: "Maria Hovhannisyan",
          title: "Geography and History Educator",
          email: "mariahovhannisyan@ufar.com",
          phoneNum: "+374 55 334455",
          subjects: ["Geography", "History"],
          rating: "4.7",
          location: "Sevan, Armenia",
          price: "$29/hour",
          bio: "Exploring the world through maps and history.",
          experience: "5+ years of tutoring experience.",
          qualifications: "BA in History from OPQ University.",
          profilePicture: "/tutor8.jpg",
          reviews: [
            { user: "William", rating: "4.7", comment: "Very knowledgeable in world history." },
            { user: "Isabella", rating: "4.6", comment: "Great at making geography interesting!" }
          ]
        },
        {
          id: 9,
          name: "Arman Melikyan",
          title: "Biology and Chemistry Tutor",
          email: "armanmelikyan@ufar.com",
          phoneNum: "+374 44 776655",
          subjects: ["Biology", "Chemistry"],
          rating: "4.8",
          location: "Hrazdan, Armenia",
          price: "$30/hour",
          bio: "Passionate about biology and chemistry education.",
          experience: "6+ years of tutoring experience.",
          qualifications: "MSc in Biochemistry from RST University.",
          profilePicture: "/tutor9.jpg",
          reviews: [
            { user: "Leo", rating: "4.8", comment: "Very patient and informative!" },
            { user: "Emma", rating: "4.7", comment: "Helped me with complex biochemistry topics." }
          ]
        },
        {
          id: 10,
          name: "Elina Sargsyan",
          title: "Armenian and English Language Tutor",
          email: "elinasargsyan@ufar.com",
          phoneNum: "+374 99 554433",
          subjects: ["Armenian Language and Literature", "English"],
          rating: "4.9",
          location: "Yerevan, Armenia",
          price: "$26/hour",
          bio: "Helping students improve their language skills with ease.",
          experience: "7+ years of tutoring experience.",
          qualifications: "BA in Armenian and English Literature from GHI University.",
          profilePicture: "/tutor10.jpg",
          reviews: [
            { user: "Daniel", rating: "5", comment: "Improved my Armenian writing a lot!" },
            { user: "Ava", rating: "4.9", comment: "Great tutor for language learners." }
          ]
        }
      ]      
  
  export default tutorsData;