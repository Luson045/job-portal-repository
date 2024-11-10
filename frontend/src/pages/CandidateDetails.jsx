import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobsData } from '../data/mockData';
import { Button, Typography, List, ListItem } from '@mui/material';
import AddModal from '../utils/AddModals';

const CandidateDetails = () => {
  const { jobId } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(jobId));
  const [candidates, setCandidates] = useState(job.candidates);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, { ...newCandidate, id: candidates.length + 1 }]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Candidates for {job.title}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
        Add New Candidate
      </Button>
      <List>
        {candidates.map((candidate) => (
          <ListItem key={candidate.id} style={{ borderBottom: '1px solid #eee' }}>
            <Typography variant="h6">{candidate.name}</Typography>
            <Typography variant="body2">Application Date: {candidate.applicationDate}</Typography>
            <Typography variant="caption">Status: {candidate.status}</Typography>
          </ListItem>
        ))}
      </List>

      {/* Add Candidate Modal */}
      <AddModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCandidate}
        fields={[
          { name: 'name', label: 'Candidate Name' },
          { name: 'resume', label: 'Resume Link' },
          { name: 'applicationDate', label: 'Application Date' },
          { name: 'status', label: 'Status' },
        ]}
        title="Add New Candidate"
      />
    </div>
  );
};

export default CandidateDetails;
