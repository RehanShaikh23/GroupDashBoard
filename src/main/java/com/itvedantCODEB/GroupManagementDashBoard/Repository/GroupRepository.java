package com.itvedantCODEB.GroupManagementDashBoard.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itvedantCODEB.GroupManagementDashBoard.Entity.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

	Optional<Group> findByGroupName(String groupName);
	
}
