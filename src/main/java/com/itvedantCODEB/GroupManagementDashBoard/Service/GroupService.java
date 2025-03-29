package com.itvedantCODEB.GroupManagementDashBoard.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.itvedantCODEB.GroupManagementDashBoard.Entity.Group;
import com.itvedantCODEB.GroupManagementDashBoard.Repository.GroupRepository;

@Service
public class GroupService {

	
	private GroupRepository groupRepository;


   public GroupService(GroupRepository groupRepository) {
	   this.groupRepository = groupRepository;
   }

	
   public Group createGroup(Group group) {
	   Optional<Group> exisitingGroup = groupRepository.findByGroupName(group.getGroupName());
	   if(exisitingGroup.isPresent()) {
		   throw new RuntimeException("Group name is already exists");
	   }
	      return groupRepository.save(group);
   }
	
	public List<Group> getAllGroup(){
		return groupRepository.findAll();
	}
	
	public Group getGroupById(Long id) {
		return groupRepository.findById(id).orElseThrow(() -> new RuntimeException("Group not found"));
	}
	
	public Group updateGroup(Long id, String newName) {
		
		Group group = getGroupById(id);
		group.setGroupName(newName);
		group.setUpdatedAt(java.time.LocalDateTime.now());
		return groupRepository.save(group);
		
		
		
	}
	
	public void deactivate(long id) {
		Group group = getGroupById(id);
		group.setIsActive(false);
		group.setUpdatedAt(java.time.LocalDateTime.now());
		groupRepository.save(group);
	}
	
}
