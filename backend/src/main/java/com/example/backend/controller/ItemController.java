package com.example.backend.controller;

import com.example.backend.entity.Item;
import com.example.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {
    
    @Autowired
    private ItemRepository itemRepository;
    
    // GET all items
    @GetMapping
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
    
    // GET item by id
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
        Optional<Item> item = itemRepository.findById(id);
        return item.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }
    
    // POST create new item
    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }
    
    // PUT update item
    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item itemDetails) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        
        if (optionalItem.isPresent()) {
            Item item = optionalItem.get();
            item.setName(itemDetails.getName());
            item.setDescription(itemDetails.getDescription());
            return ResponseEntity.ok(itemRepository.save(item));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // DELETE item
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        if (itemRepository.existsById(id)) {
            itemRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}