package tn.angular.c2s.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.angular.c2s.demo.models.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
}
