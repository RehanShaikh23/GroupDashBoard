package com.itvedantCODEB.GroupManagementDashBoard.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itvedantCODEB.GroupManagementDashBoard.Entity.Group;
import com.itvedantCODEB.GroupManagementDashBoard.Service.GroupService;

import jakarta.websocket.server.PathParam;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/groups")
public class GroupController {

	
	private  GroupService groupService;
	
	public GroupController(GroupService groupService) {
		this.groupService = groupService;
	}
	
	
	
	
	@PostMapping("/create")
	public ResponseEntity<Group> createGroup(@RequestBody Group group){
		return ResponseEntity.ok(groupService.createGroup(group));
	}
	
	@GetMapping
	public ResponseEntity<List<Group>> getAllGroup(){
		return ResponseEntity.ok(groupService.getAllGroup());
	}
	
	@GetMapping("/{id}")
	public  ResponseEntity<Group> getGroupById(@PathVariable Long id){
		return ResponseEntity.ok(groupService.getGroupById(id));
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Group> updateGroup(@PathVariable Long id, String newName){
		return ResponseEntity.ok(groupService.updateGroup(id, newName));
	}
	
	@PatchMapping("/{id}/deactivate")
	public ResponseEntity<Void> deactivateGroup(@PathVariable Long id){
		groupService.deactivate(id);
		return ResponseEntity.noContent().build();
	}
	
	
	
}
