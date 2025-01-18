import { useState } from "react";
import React from "react";
import logoimg6 from "./images/logo6.jpeg";
import logoimg5 from "./images/logo5.jpeg";
import logoimg4 from "./images/logo4.jpeg";
import logoimg3 from "./images/logo3.jpeg";
import logoimg2 from "./images/logo2.jpeg";
import logoimg1 from "./images/logo1.jpeg";
import testimg from "./images/testimonialimg.jpeg";
import profileimg from "./images/profile.jpg";
import blog1 from "./images/blog1 (1).jpeg";
import blog2 from "./images/blog1 (2).jpeg";
import blog3 from "./images/blog1 (3).jpeg";
import "./App.css";

const Components = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan at any time." },
    { question: "What is your cancellation policy?", answer: "You can cancel your subscription anytime without any penalty." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can customize your invoice with additional information." },
    { question: "How does billing work?", answer: "Billing occurs monthly or annually based on your chosen plan." },
    { question: "How do I change my account email?", answer: "You can update your account email from the settings page." },
  ];
  const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: blog1, // Replace with actual image paths
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: blog2,
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: blog3,
    },
  ];


  return (
    <div>
      {/* Logos Section */}
      <section className="logos">
        <h4>Join 4,000+ companies already growing</h4>
        <div className="logos-container">
          <img src={logoimg1} alt="Boltshift Logo" />
          <img src={logoimg2} alt="Lightbox Logo" />
          <img src={logoimg3} alt="FeatherDev Logo" />
          <img src={logoimg4} alt="Spherule Logo" />
          <img src={logoimg5} alt="GlobalBank Logo" />
          <img src={logoimg6} alt="Nietzsche Logo" />
        </div>
      </section>

      {/* Features Section */}
      <div className="features-section" id="features-section">
        <div className="features-heading">
          <p className="features-subtitle">Features</p>
          <h2 className="features-title">Analytics that feels like it’s from the future</h2>
          <p className="features-description">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Share team inboxes</h3>
            <p className="feature-description">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Deliver instant answers</h3>
            <p className="feature-description">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Manage your team with reports</h3>
            <p className="feature-description">
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <h3 className="feature-title">Connect with customers</h3>
            <p className="feature-description">
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔌</div>
            <h3 className="feature-title">Connect the tools you already use</h3>
            <p className="feature-description">
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">Our people make the difference</h3>
            <p className="feature-description">
              We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section">
        <div className="testimonial-logo">
          <img src={testimg} alt="Sisyphus Logo" />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "We’ve been using Untitled to kickstart every new project and can’t imagine working without it."
          </p>
          <div className="testimonial-author">
            <img src={profileimg} alt="Candice Wu" className="author-image" />
            <div className="author-info">
              <h4 className="author-name">Candice Wu</h4>
              <p className="author-title">Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }} id="faq">
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Frequently Asked Questions</h1>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>Everything you need to know about the product and billing.</p>
        <div>
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{ borderBottom: "1px solid #ddd", padding: "10px 0", cursor: "pointer" }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p style={{ marginTop: "10px", color: "#555" }}>{item.answer}</p>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #ddd", paddingTop: "20px" }}>
          <p>Can't find the answer you're looking for? Please chat with our friendly team.</p>
          <button className="btnstyles"
            style={{
              backgroundColor: "#ff9800",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
      {/*blog section*/}
      <div className="blog-section">
      <div className="blog-header">
        <h4>Our blog</h4>
        <h1>Lastest blog posts</h1>
        <p>
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <button className="btnstyles">View all posts</button>
      </div>
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-category">{post.category}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-meta">
                <p className="blog-author">{post.author}</p>
                <p className="blog-date">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="trial-section">
        <h2>Start your free trial</h2>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="trial-buttons">
          <button className="learn-more-btn">Learn more</button>
          <button className="btnstyles">Get started</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Components;
