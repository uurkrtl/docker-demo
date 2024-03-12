package net.ugurkartal.backend.repositories;

import net.ugurkartal.backend.models.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoRepository extends MongoRepository<Todo, String>{
}
