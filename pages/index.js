import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { useEffect } from 'react';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  // Initialize AOS library
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    AOS.init({
      duration: 1000, // Optional: Customize AOS settings
      once: true, // Whether the animation should only happen once
    });
  }, []);

  // Program Section
  const programSection = [
    {
      title: "CORE PROGRAM",
      image: "/assets/programs-section/core-program-new.webp",
      forText: ["Untuk persiapan masuk", "S1 dan S2"],
      listItems: [
        "1 sampai 10 peserta per mentor*",
        "12 sampai 23 pertemuan*",
      ],
      price: "Rp 700.000-an",
      link: {
        href: "core-program",
        text: "Lebih Lanjut",
      },
      note: "*tergantung pilihan program",
    },
    {
      title: "SCHOLARSHIP CARE",
      image: "/assets/programs-section/scholarship-care-new.webp",
      forText: ["Untuk semua jenjang", "S1, S2 & S3"],
      listItems: [
        "1 sampai 3 peserta per mentor*",
        "Coaching and Assistance, Proofreading, Exclusive Sharing",
      ],
      price: "Rp 90.000-an",
      link: {
        href: "scholarship-care",
        text: "Lebih Lanjut",
      },
      note: "*tergantung pilihan program",
    },
    {
      title: "MINI COURSE",
      image: "/assets/programs-section/mini-course-new.webp",
      forText: ["Untuk persiapan masuk", "S1 & S2"],
      listItems: [
        "20 peserta per mentor",
        "Essay/Motlet, CV & Portofolio, Surat Rekomendasi, Wawancara*",
      ],
      price: "Rp 35.000-an",
      link: {
        href: "mini-course",
        text: "Lebih Lanjut",
      },
      note: "*tergantung pilihan program",
    },
  ];

  // Program data for medium screens
  // Group the program data into slides of two programs each.
  const slides_2 = [];
  for (let i = 0; i < programSection.length; i += 2) {
    slides_2.push(programSection.slice(i, i + 2));
  }

  // Program data for xsmall screens (mobile phone)
  const programsMobile = [
    {
      title: "CORE PROGRAM",
      description: "Untuk persiapan masuk\nS1 dan S2",
      price: "Rp 700.000-an",
      link: "core-program",
    },
    {
      title: "SCHOLARSHIP CARE",
      description: "Untuk semua jenjang\nS1, S2 & S3",
      price: "Rp 90.000-an",
      link: "scholarship-care",
    },
    {
      title: "MINI COURSE",
      description: "Untuk persiapan masuk\nS1 & S2",
      price: "Rp 35.000-an",
      link: "mini-course",
    },
  ];

  // Mentor Section //
  // Mentor data for big screens
  const slidesForBig = [
    [
      {
        name: "Haniswita",
        image: "/assets/mentor-section/haniswita.webp",
        details: [
          "IELTS Score 7",
          "Wageningen University and Research",
          "Fish-microbe Interaction",
          "Vliruous Scholarship and PhD University Employee",
        ],
      },
      {
        name: "Radesma S H.",
        image: "/assets/mentor-section/radesma-hermawan.webp",
        details: [
          "IELTS Score 7",
          "Wageningen University and Research",
          "Urban Planner, Sociologist",
          "LPDP Awardee",
        ],
      },
      {
        name: "Rey Abraham",
        image: "/assets/mentor-section/rey-abraham.webp",
        details: [
          "IELTS Score 7.5",
          "University of Manchester",
          "Development Studies",
          "LPDP Awardee",
        ],
      },
    ],
    [
      {
        name: "Rafa Listyani Rahman",
        image: "/assets/mentor-section/rafa.webp",
        details: [
          "TOEFL ITP 577",
          "Maria Curie-Skłodowska University",
          "Biologist",
          "Stefan Banach Scholarship Awardee",
        ],
      },
      {
        name: "Kholqillah Ardhian Ilman",
        image: "/assets/mentor-section/kholqillah-ardhian-ilman.webp",
        details: [
          "IELTS 7",
          "Kanazawa University",
          "Mechanical Engineering, Material Engineering, Metalurgy",
          "MEXT Awardee",
        ],
      },
      {
        name: "Dwi Nining Lestari",
        image: "/assets/mentor-section/dwi-nining-lestari.webp",
        details: [
          "IELTS 6.5",
          "Jagiellonian University",
          "Environmental Specialist",
          "Bridging Course Programs, Stefan Banach Scholarship Awardee",
        ],
      },
    ],
    [
      {
        name: "Adi Kusmayadi",
        image: "/assets/mentor-section/adi-kusmayadi.webp",
        details: [
          "Tunghai University",
          "Bioenergy, Biorefinery, Circular Economy, Waste Management",
          "Beasiswa Kampus di Taiwan",
        ],
      },
      {
        name: "Praniti Herma Sunaryo",
        image: "/assets/mentor-section/praniti-herma.webp",
        details: [
          "IELTS 8",
          "Wageningen University and Research",
          "Forest and Nature Conservationist",
          "LPDP Awardee",
        ],
      },
      {
        name: "Syarifatul Umam",
        image: "/assets/mentor-section/syarifatul-umam.webp",
        details: [
          "IELTS 7",
          "University of Maryland",
          "UX/CX Research, Entrepreneurship, Mental Fitness",
          "LPDP Awardee",
        ],
      },
    ],
    [
      {
        name: "Ayunda Dewi Jayanti Jilan Putri",
        image: "/assets/mentor-section/ayunda-putri.webp",
        details: [
          "IELTS 6.5",
          "Vrije Universiteit Amsterdam",
          "Medical, International Public Health, Policy",
          "LPDP Awardee",
        ],
      },
      {
        name: "Nurfitriani Marsuki",
        image: "/assets/mentor-section/nurfitriani-marsuki.webp",
        details: [
          "IELTS 7",
          "Utrecht University",
          "Applied Cognitive Psychology",
          "LPDP Awardee",
        ],
      },
      {
        name: "Naurah Nadzifah",
        image: "/assets/mentor-section/naura.webp",
        details: [
          "IELTS 6.5",
          "Wageningen University and Research",
          "Sustainable Business Specialist",
          "BPI-BIM, Bridging Course, Beasiswa PPA",
        ],
      },
    ],
  ];

  // Mentor data for medium screens
  const slidesForMedium = [
    [
      {
        name: "Haniswita",
        image: "/assets/mentor-section/haniswita.webp",
        details: [
          "IELTS Score 7",
          "Wageningen University and Research",
          "Fish-microbe Interaction",
          "Vliruous Scholarship and PhD University Employee",
        ],
        // Use class without "no-scrollbar" for this mentor.
        ulClass: "card-text check-list",
      },
      {
        name: "Radesma S H.",
        image: "/assets/mentor-section/radesma-hermawan.webp",
        details: [
          "IELTS Score 7",
          "Wageningen University and Research",
          "Urban Planner, Sociologist",
          "LPDP Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
    ],
    [
      {
        name: "Rey Abraham",
        image: "/assets/mentor-section/rey-abraham.webp",
        details: [
          "IELTS Score 7.5",
          "University of Manchester",
          "Development Studies",
          "LPDP Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
      {
        name: "Rafa Listyani Rahman",
        image: "/assets/mentor-section/rafa.webp",
        details: [
          "TOEFL ITP 577",
          "Maria Curie-Skłodowska University",
          "Biologist",
          "Stefan Banach Scholarship Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
    ],
    [
      {
        name: "Kholqillah Ardhian Ilman",
        image: "/assets/mentor-section/kholqillah-ardhian-ilman.webp",
        details: [
          "IELTS 7",
          "Kanazawa University",
          "Mechanical Engineering, Material Engineering, Metalurgy",
          "MEXT Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
      {
        name: "Dwi Nining Lestari",
        image: "/assets/mentor-section/dwi-nining-lestari.webp",
        details: [
          "IELTS 6.5",
          "Jagiellonian University",
          "Environmental Specialist",
          "Bridging Course Programs, Stefan Banach Scholarship Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
    ],
    [
      {
        name: "Adi Kusmayadi",
        image: "/assets/mentor-section/adi-kusmayadi.webp",
        details: [
          "Tunghai University",
          "Bioenergy, Biorefinery, Circular Economy, Waste Management",
          "Beasiswa Kampus di Taiwan",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
      {
        name: "Praniti Herma Sunaryo",
        image: "/assets/mentor-section/praniti-herma.webp",
        details: [
          "IELTS 8",
          "Wageningen University and Research",
          "Forest and Nature Conservationist",
          "LPDP Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
    ],
    [
      {
        name: "Syarifatul Umam",
        image: "/assets/mentor-section/syarifatul-umam.webp",
        details: [
          "IELTS 7",
          "University of Maryland",
          "UX/CX Research, Entrepreneurship, Mental Fitness",
          "LPDP Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
      {
        name: "Ayunda Dewi Jayanti Jilan Putri",
        image: "/assets/mentor-section/ayunda-putri.webp",
        details: [
          "IELTS 6.5",
          "Vrije Universiteit Amsterdam",
          "Medical, International Public Health, Policy",
          "LPDP Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
    ],
    [
      {
        name: "Nurfitriani Marsuki",
        image: "/assets/mentor-section/nurfitriani-marsuki.webp",
        details: [
          "IELTS 7",
          "Utrecht University",
          "Applied Cognitive Psychology",
          "LPDP Awardee",
        ],
        ulClass: "card-text check-list no-scrollbar",
      },
      {
        name: "Naurah Nadzifah",
        image: "/assets/mentor-section/naura.webp",
        details: [
          "IELTS 6.5",
          "Wageningen University and Research",
          "Sustainable Business Specialist",
          "BPI-BIM, Bridging Course, Beasiswa PPA",
        ],
        ulClass: "card-text check-list",
      },
    ],
  ];

  // Mentor data for xsmall screens
  const slidesForXsmall = [
    {
      name: "Haniswita",
      image: "/assets/mentor-section/haniswita.webp",
      details: [
        "IELTS Score 7",
        "Wageningen University and Research",
        "Fish-microbe Interaction",
        "Vliruous Scholarship and PhD University Employee",
      ],
      ulClass: "card-text check-list",
    },
    {
      name: "Radesma S H.",
      image: "/assets/mentor-section/radesma-hermawan.webp",
      details: [
        "IELTS Score 7",
        "Wageningen University and Research",
        "Urban Planner, Sociologist",
        "LPDP Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Rey Abraham",
      image: "/assets/mentor-section/rey-abraham.webp",
      details: [
        "IELTS Score 7.5",
        "University of Manchester",
        "Development Studies",
        "LPDP Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Rafa Listyani Rahman",
      image: "/assets/mentor-section/rafa.webp",
      details: [
        "TOEFL ITP 577",
        "Maria Curie-Skłodowska University",
        "Biologist",
        "Stefan Banach Scholarship Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Kholqillah Ardhian Ilman",
      image: "/assets/mentor-section/kholqillah-ardhian-ilman.webp",
      details: [
        "IELTS 7",
        "Kanazawa University",
        "Mechanical Engineering, Material Engineering, Metalurgy",
        "MEXT Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Dwi Nining Lestari",
      image: "/assets/mentor-section/dwi-nining-lestari.webp",
      details: [
        "IELTS 6.5",
        "Jagiellonian University",
        "Environmental Specialist",
        "Bridging Course Programs, Stefan Banach Scholarship Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Adi Kusmayadi",
      image: "/assets/mentor-section/adi-kusmayadi.webp",
      details: [
        "Tunghai University",
        "Bioenergy, Biorefinery, Circular Economy, Waste Management",
        "Beasiswa Kampus di Taiwan",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Praniti Herma Sunaryo",
      image: "/assets/mentor-section/praniti-herma.webp",
      details: [
        "IELTS 8",
        "Wageningen University and Research",
        "Forest and Nature Conservationist",
        "LPDP Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Syarifatul Umam",
      image: "/assets/mentor-section/syarifatul-umam.webp",
      details: [
        "IELTS 7",
        "University of Maryland",
        "UX/CX Research, Entrepreneurship, Mental Fitness",
        "LPDP Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Ayunda Dewi Jayanti Jilan Putri",
      image: "/assets/mentor-section/ayunda-putri.webp",
      details: [
        "IELTS 6.5",
        "Vrije Universiteit Amsterdam",
        "Medical, International Public Health, Policy",
        "LPDP Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Nurfitriani Marsuki",
      image: "/assets/mentor-section/nurfitriani-marsuki.webp",
      details: [
        "IELTS 7",
        "Utrecht University",
        "Applied Cognitive Psychology",
        "LPDP Awardee",
      ],
      ulClass: "card-text check-list no-scrollbar",
    },
    {
      name: "Naurah Nadzifah",
      image: "/assets/mentor-section/naura.webp",
      details: [
        "IELTS 6.5",
        "Wageningen University and Research",
        "Sustainable Business Specialist",
        "BPI-BIM, Bridging Course, Beasiswa PPA",
      ],
      ulClass: "card-text check-list",
    },
  ];

  // FAQ Section
  const faqs = [
    {
      question: "Apa itu kursus persiapan beasiswa?",
      answer:
        "Kursus persiapan beasiswa adalah program yang dirancang untuk membantu peserta mempersiapkan diri dalam proses pendaftaran beasiswa, termasuk pembuatan esai, persiapan wawancara, dan penguasaan materi ujian yang diperlukan.",
    },
    {
      question: "Seberapa penting memiliki mentor dalam mendaftar beasiswa?",
      answer:
        "Memiliki mentor sangat penting karena mereka dapat memberikan bimbingan, feedback, dan wawasan yang berharga, serta membantu peserta meningkatkan kualitas aplikasi dan mempersiapkan wawancara.",
    },
    {
      question: "Apa keuntungan dari kursus persiapan beasiswa?",
      answer:
        "Keuntungannya termasuk peningkatan peluang diterima beasiswa, pemahaman lebih baik tentang proses seleksi, dan akses ke materi pelatihan yang terstruktur serta bimbingan dari ahli di bidangnya.",
    },
    {
      question: "Apa bedanya Lernen dengan bimbingan kursus lainnya?",
      answer:
        "Lernen menawarkan program kursus persiapan beasiswa yang lebih personal dan terfokus pada kebutuhan masing-masing peserta, dengan mentor berpengalaman yang memberikan bimbingan langsung, serta materi yang disesuaikan dengan beasiswa yang dipilih. Kami juga memiliki pendekatan yang lebih interaktif dan dukungan berkelanjutan sepanjang proses pendaftaran.",
    },
    {
      question: "Bagaimana cara mendaftar perkursusan?",
      answer:
        "Pendaftaran dapat dilakukan melalui admin whatsapp kami, di mana peserta dapat memilih kursus yang diinginkan, mengisi formulir pendaftaran, dan melakukan pembayaran.",
      link: {
        url: "https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!",
        text: "Hubungi Admin",
      },
    },
  ];

  // Guide Section
  const steps = [
    {
      image: "/assets/guide-section/messaging.svg",
      text: "Hubungi Lernen Indonesia melalui Whatsapp",
    },
    {
      image: "/assets/guide-section/program-choosing.svg",
      text: "Silakan pilih kursus yang Anda minati",
    },
    {
      image: "/assets/guide-section/form.svg",
      text: "Silakan lengkapi formulir pendaftaran yang tersedia",
    },
    {
      image: "/assets/guide-section/payment.svg",
      text: "Pilih metode pembayaran, lakukan pembayaran sesuai nominal harga, dan konfirmasikan melalui formulir yang sama",
    },
    {
      image: "/assets/guide-section/wait.svg",
      text: "Harap menunggu konfirmasi pembayaran hingga maksimal 12 jam",
    },
    {
      image: "/assets/guide-section/registered.svg",
      text: "Setelah menerima konfirmasi, Anda resmi terdaftar dalam program kursus",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-row row">
            <div
              className="hero-content col-lg responsive-text"
              data-aos="zoom-in"
            >
              <h1>
                FROM
                <span className="block-word">INDONESIA</span> TO
                <span className="block-word">WORLDWIDE</span>
              </h1>
              <p>
                Lernen menyediakan layanan konsultasi pendidikan dan pelatihan
                profesional untuk
                <br className="d-none d-lg-block" />
                mahasiswa Indonesia. Tingkatkan kompetensi akademik dan
                profesional,
                <br className="d-none d-lg-block" />
                raih sukses akademik, dan buka peluang karir terbaik bersama
                Lernen.
              </p>
              <Link href="https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!">
                <a

                  className="btn custom-btn mx-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <div className="container text-center">
          <div className="title responsive-text" data-aos="zoom-in">
            <h2>Mengapa Memilih Kami?</h2>
            <p>Materi dan pengalaman belajar yang lebih efisien !!!</p>
          </div>

          <div className="why-us-content row my-5 responsive-text justify-content-center">
            <div className="col-lg-3 col-md-3 my-2" data-aos="zoom-in" data-aos-duration="400">
              <img
                src="/assets/why-us-section/online-learning.svg"
                alt="img-1"
              />
              <h5>Pembelajaran Fleksibel</h5>
              <p>Belajar di manapun dan kapan pun !!!</p>
            </div>
            <div className="col-lg-3 col-md-3 my-2" data-aos="zoom-in" data-aos-duration="400">
              <img
                src="/assets/why-us-section/teaching.svg"
                alt="img-2"
              />
              <h5>Mentor Profesional</h5>
              <p>Pemateri yang berpengalaman !!!</p>
            </div>
            <div className="col-lg-3 col-md-3 my-2" data-aos="zoom-in" data-aos-duration="400">
              <img
                src="/assets/why-us-section/chatting.svg"
                alt="img-3"
              />
              <h5>Tanya Kapan Saja</h5>
              <p>Bertanya ke pemateri kapan saja !!!</p>
            </div>
            <div className="col-lg-3 col-md-3 my-2" data-aos="zoom-in" data-aos-duration="400">
              <img
                src="/assets/why-us-section/uptodate.svg"
                alt="img-4"
              />
              <h5>Program Bervariasi</h5>
              <p>Banyak pilihan program pembelajaran !!!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="program-section" id="program-section">
        <div className="container">
          <div className="title responsive-text text-center" data-aos="zoom-in">
            <h2>Program Kursus</h2>
            <p>
              Lernen mewujudkan potensi terbaik Anda melalui bimbingan belajar
              yang interaktif dan fleksibel !!!
            </p>
          </div>

          {/* Carousel for Big Screen */}
          <div
            id="carouselMentorBigScreenProgramSection"
            className="carousel carousel-dark slide d-none d-lg-block"
            data-aos="zoom-in"
          >
            <div className="carousel-inner responsive-text">
              {/* Single slide containing all program cards */}
              <div className="carousel-item active">
                <div className="cards-wrapper text-center">
                  {programSection.map((program, index) => (
                    <div key={index} className="card">
                      <div className="image-wrapper">
                        <img
                          src={program.image}
                          alt={program.title}
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-center">{program.title}</h4>
                        <div className="for text-center">
                          <p>
                            {program.forText.map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < program.forText.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                        <ul className="card-text check-list">
                          {program.listItems.map((item, liIndex) => (
                            <li key={liIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-price my-3 text-center">
                        <h6>Mulai dari</h6>
                        <h5>{program.price}</h5>
                      </div>
                      <div className="d-flex mx-2">
                        <Link href={program.link.href}>
                          <a className="btn custom-btn d-lg-block mx-auto">
                            {program.link.text}
                          </a>
                        </Link>
                      </div>
                      <p style={{ fontSize: "10px", marginTop: "0.25rem" }}>
                        {program.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMentorBigScreenProgramSection"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMentorBigScreenProgramSection"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Carousel for Medium Screen */}
          <div
            id="carouselMentorMediumScreenProgramSection"
            className="carousel carousel-dark slide d-none d-md-block d-lg-none"
            data-aos="zoom-in"
          >
            <div className="carousel-inner responsive-text">
              {slides_2.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="cards-wrapper text-center">
                    {slide.map((program, index) => (
                      <div key={index} className="card">
                        <div className="image-wrapper">
                          <img
                            src={program.image}
                            alt={program.title}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-center">{program.title}</h4>
                          <div className="for text-center">
                            <p>
                              {program.forText.map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < program.forText.length - 1 && <br />}
                                </span>
                              ))}
                            </p>
                          </div>
                          <ul className="card-text check-list">
                            {program.listItems.map((item, liIndex) => (
                              <li key={liIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="content-price my-3 text-center">
                          <h6>Mulai dari</h6>
                          <h5>{program.price}</h5>
                        </div>
                        <div className="d-flex mx-2">
                          <Link href={program.link.href}>
                            <a
                              className="btn custom-btn d-lg-block mx-auto"
                            >
                              {program.link.text}
                            </a>
                          </Link>
                        </div>
                        <p style={{ fontSize: "10px", marginTop: "0.25rem" }}>
                          {program.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMentorMediumScreenProgramSection"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMentorMediumScreenProgramSection"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Carousel for Small Screen */}
          <div
            id="carouselMentorSmallScreenProgramSection"
            className="carousel carousel-dark slide d-none d-sm-block d-md-none"
            data-aos="zoom-in"
          >
            <div className="carousel-inner text-center responsive-text">
              {programSection.map((program, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="cards-wrapper">
                    <div className="card">
                      <div className="image-wrapper">
                        <img
                          src={program.image}
                          alt={program.title}
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-center">{program.title}</h4>
                        <div className="for text-center">
                          <p>
                            {program.forText.map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < program.forText.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                        <ul className="card-text check-list">
                          {program.listItems.map((item, liIndex) => (
                            <li key={liIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="content-price my-3 text-center">
                          <h6>Mulai dari</h6>
                          <h5>{program.price}</h5>
                        </div>
                        <div className="d-flex mx-2">
                          <Link href={program.link.href}>
                            <a className="btn custom-btn d-lg-block mx-auto">
                              {program.link.text}
                            </a>
                          </Link>
                        </div>
                        <p style={{ fontSize: "10px", marginTop: "0.25rem" }}>
                          {program.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMentorSmallScreenProgramSection"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMentorSmallScreenProgramSection"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* For XSmall Screen (mobile phone) */}
          <div className="row my-5 responsive-text justify-content-center d-block d-sm-none">
            {programsMobile.map((program, index) => (
              <div
                key={index}
                className={`col-12 my-2 ${program.title === "SCHOLARSHIP CARE" ? "mt-3 mb-3" : ""}`}
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h4 className="card-title text-center">{program.title}</h4>
                    <div className="for text-center">
                      <p>
                        {program.description.split("\n").map((line, i, arr) => (
                          <span key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="content-price my-3 text-center">
                      <h6>Mulai dari</h6>
                      <h5>{program.price}</h5>
                    </div>
                    <div className="d-flex mx-2">
                      <Link href={program.link}>
                        <a className="btn custom-btn d-lg-block mx-auto">
                          Lebih Lanjut
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mentor Section */}
      <section className="mentor-section" id="mentor-section">
        <div className="container">
          <div className="title responsive-text text-center" data-aos="zoom-in">
            <h2>
              Dibimbing oleh Mentor-Mentor yang Keren
              dan Berkualitas
            </h2>
            <p>
              Mentor berpengalaman yang merupakan penerima beasiswa ternama seperti <br />
              LPDP, MEXT, Erasmus Mundus dan program beasiswa bergengsi lainnya
            </p>
          </div>

          {/* Carousel Mentor Big Screen */}
          <div
            id="carouselMentorBigScreenMentorSection"
            className="carousel carousel-dark slide d-none d-lg-block responsive-text"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-aos="zoom-in"
          >
            <div className="carousel-inner">
              {slidesForBig.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="cards-wrapper">
                    {slide.map((mentor, index) => (
                      <div key={index} className="card">
                        <div className="image-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                          />
                        </div>
                        <div className="text-center">
                          <hr className="separator" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">{mentor.name}</h5>
                          <ul
                            className="card-text check-list no-scrollbar"
                            style={{ maxHeight: "80%" }}
                          >
                            {mentor.details.map((detail, liIndex) => (
                              <li key={liIndex}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMentorBigScreenMentorSection"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMentorBigScreenMentorSection"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Carousel Mentor Medium Screen */}
          <div
            id="carouselMentorMediumScreenMentorSection"
            className="carousel carousel-dark slide d-none d-md-block d-lg-none responsive-text"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-aos="zoom-in"
          >
            <div className="carousel-inner">
              {slidesForMedium.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="cards-wrapper">
                    {slide.map((mentor, index) => (
                      <div key={index} className="card">
                        <div className="image-wrapper">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                          />
                        </div>
                        <div className="text-center">
                          <hr className="separator" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">{mentor.name}</h5>
                          <ul className={mentor.ulClass} style={{ maxHeight: "80%" }}>
                            {mentor.details.map((detail, liIndex) => (
                              <li key={liIndex}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMentorMediumScreenMentorSection"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMentorMediumScreenMentorSection"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Carousel Mentor XSmall Screen */}
          <div
            id="carouselMentorXSmallScreenMentorSection"
            className="carousel carousel-dark slide d-block d-md-none responsive-text"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-aos="zoom-in"
          >
            <div className="carousel-inner">
              {slidesForXsmall.map((mentor, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <div className="cards-wrapper">
                    <div className="card">
                      <div className="image-wrapper">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                        />
                      </div>
                      <div className="text-center">
                        <hr className="separator" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">{mentor.name}</h5>
                        <ul className={mentor.ulClass} style={{ maxHeight: "80%" }}>
                          {mentor.details.map((detail, liIndex) => (
                            <li key={liIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMentorXSmallScreenMentorSection"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMentorXSmallScreenMentorSection"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="title responsive-text text-center" data-aos="zoom-in">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div
            className="accordion d-flex flex-column align-items-center responsive-text mt-5"
            id="accordionFlush"
          >
            {faqs.map((faq, index) => {
              // Generate unique IDs for accessibility and accordion functionality.
              const headingId = `flush-heading${index}`;
              const collapseId = `flush-collapse${index}`;

              return (
                <div
                  className="accordion-item m-1"
                  data-aos="zoom-in"
                  key={index}
                >
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded="false"
                      aria-controls={collapseId}
                    >
                      <strong>{faq.question}</strong>
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionFlush"
                  >
                    <div className="accordion-body card">
                      <div className="card-body">
                        <p>{faq.answer}</p>
                        {faq.link && (
                          <a
                            href={faq.link.url}
                            className="btn custom-btn mx-auto"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {faq.link.text}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="guide-section">
        <div className="container">
          <div
            className="title responsive-text text-center mb-5"
            data-aos="zoom-in"
          >
            <h2>Langkah-langkah Pendaftaran</h2>
            <p>Pendaftaran praktis dengan biaya terjangkau!</p>
          </div>

          <div className="row responsive-text align-items-center justify-content-center">
            {steps.map((step, index) => (
              // Using a React Fragment to group each step and its following arrow
              <React.Fragment key={index}>
                <div className="col-md-6">
                  <div
                    className="content d-flex align-items-center text-left"
                    data-aos="zoom-in"
                  >
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                    />
                    <p className="text-left">{step.text}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="arrow text-center" data-aos="zoom-in">
                    <img
                      src="/assets/guide-section/arrow.svg"
                      alt="Arrow"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}