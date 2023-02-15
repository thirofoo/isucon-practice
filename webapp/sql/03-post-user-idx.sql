USE `isuconp`;
ALTER TABLE `posts` ADD INDEX user_id_idx(user_id);
ALTER TABLE `posts` ADD INDEX created_at_idx(created_at DESC);