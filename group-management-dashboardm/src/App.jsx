import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/DashBoard';
import AddGroupForm from './components/AddGroupForm';
import EditGroupForm from './components/EditGroupForm';
import DeleteConfirmation from './components/DeleteConfirmation';
import './App.css';

function App() {
  
  const [groups, setGroups] = useState([]);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteGroupId, setDeleteGroupId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  
  const chainIds = [1]; 

  
  useEffect(() => {
    const savedGroups = localStorage.getItem('groups');
    if (savedGroups) {
      setGroups(JSON.parse(savedGroups));
    } else {
      
      const initialGroups = [
        { id: 1, name: 'Persian Carpet', isActive: true },
        { id: 2, name: 'Mumbai Textile', isActive: true },
        { id: 3, name: 'Chennai Fabric', isActive: true }
      ];
      setGroups(initialGroups);
      localStorage.setItem('groups', JSON.stringify(initialGroups));
    }
  }, []);

  
  useEffect(() => {
    if (groups.length > 0) {
      localStorage.setItem('groups', JSON.stringify(groups));
    }
  }, [groups]);

  
  const navigateTo = (view) => {
    setActiveView(view);
    setErrorMessage('');
  };

  
  const addGroup = (groupName) => {
    const trimmedName = groupName.trim();
    
    
    if (!trimmedName) {
      setErrorMessage('Group name cannot be empty!');
      return false;
    }
    
    
    if (groups.some(g => g.name.toLowerCase() === trimmedName.toLowerCase())) {
      setErrorMessage('Group Already Exists!!!');
      return false;
    }
    
    
    const newId = groups.length > 0 ? Math.max(...groups.map(g => g.id)) + 1 : 1;
    const updatedGroups = [...groups, {
      id: newId,
      name: trimmedName,
      isActive: true
    }];
    
    setGroups(updatedGroups);
    setErrorMessage('');
    navigateTo('dashboard');
    return true;
  };

  
  const updateGroup = (id, groupName) => {
    const trimmedName = groupName.trim();
    
    
    if (!trimmedName) {
      setErrorMessage('Group name cannot be empty!');
      return false;
    }
    
    
    if (groups.some(g => g.name.toLowerCase() === trimmedName.toLowerCase() && g.id !== id)) {
      setErrorMessage('Group Already Exists!!!');
      return false;
    }
    
    
    const updatedGroups = groups.map(group => 
      group.id === id ? { ...group, name: trimmedName } : group
    );
    
    setGroups(updatedGroups);
    setErrorMessage('');
    navigateTo('dashboard');
    return true;
  };

  
  const deleteGroup = () => {
    if (!deleteGroupId) return;
    
    
    if (chainIds.includes(deleteGroupId)) {
      setErrorMessage('Cannot delete this group as it is linked to a chain ID.');
      return false;
    }
    
    
    const updatedGroups = groups.map(group => 
      group.id === deleteGroupId ? { ...group, isActive: false } : group
    );
    
    setGroups(updatedGroups);
    setDeleteGroupId(null);
    setShowDeleteModal(false);
    return true;
  };

  
  const handleEditClick = (group) => {
    setSelectedGroup(group);
    navigateTo('edit');
  };

  
  const handleDeleteClick = (groupId) => {
    setDeleteGroupId(groupId);
    setShowDeleteModal(true);
  };

  
  const activeGroups = groups.filter(group => group.isActive);

  return (
    <div className="app-container">
      <Sidebar activeView={activeView} navigateTo={navigateTo} />
      <div className="main-content">
        <Header />
        
        {activeView === 'dashboard' && (
          <Dashboard 
            groups={activeGroups} 
            onAddClick={() => navigateTo('add')} 
            onEditClick={handleEditClick} 
            onDeleteClick={handleDeleteClick} 
          />
        )}
        
        {activeView === 'add' && (
          <AddGroupForm 
            onSubmit={addGroup} 
            onCancel={() => navigateTo('dashboard')} 
            errorMessage={errorMessage}
          />
        )}
        
        {activeView === 'edit' && selectedGroup && (
          <EditGroupForm 
            group={selectedGroup} 
            onSubmit={(name) => updateGroup(selectedGroup.id, name)} 
            onCancel={() => navigateTo('dashboard')} 
            errorMessage={errorMessage}
          />
        )}
        
        {showDeleteModal && (
          <DeleteConfirmation 
            onConfirm={deleteGroup} 
            onCancel={() => {
              setShowDeleteModal(false);
              setErrorMessage('');
            }} 
            errorMessage={errorMessage}
          />
        )}
      </div>
    </div>
  );
}

export default App;