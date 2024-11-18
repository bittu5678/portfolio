import React, { useState, useEffect } from 'react';
import { Button, Alert, Card, ListGroup } from 'react-bootstrap';

const CodeChefPage = () => {
  const [papers, setPapers] = useState(null);
  const [error, setError] = useState(null);

  // Replace with your API endpoint or method to fetch research papers
  const apiEndpoint = 'https://api.example.com/research-papers'; // Replace with actual endpoint

  useEffect(() => {
    // Fetch research papers when the component mounts
    fetchResearchPapers();
  }, []);

  const fetchResearchPapers = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      
      if (data && data.papers) {
        setPapers(data.papers);  // Assuming the response structure has a "papers" array
      } else {
        setError('No research papers found.');
      }
    } catch (err) {
      setError('Will be added Very Soon.');
    }
  };

  // Open paper when a list item is clicked
  const openPaper = (link) => {
    window.open(link, '_blank');  // Opens the research paper in a new tab
  };

  return (
    <div>
      <h1>My Research Papers</h1>
      {error && <Alert variant="danger">{error}</Alert>}

      {papers ? (
        <div>
          <h3>Research Papers</h3>
          <ListGroup>
            {papers.map((paper, index) => (
              <ListGroup.Item key={index} style={{ cursor: 'pointer' }} onClick={() => openPaper(paper.link)}>
                <Card>
                  <Card.Body>
                    <Card.Title>{paper.title}</Card.Title>
                    <Card.Text>{paper.abstract}</Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ) : (
        <Button onClick={fetchResearchPapers} variant="primary">
          View My Research Papers
        </Button>
      )}
    </div>
  );
};

export default CodeChefPage;
