CREATE TABLE `event` (
	`id` text PRIMARY KEY NOT NULL,
	`admin_id` text,
	`title` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `item` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`amount` integer,
	`event_id` text
);
--> statement-breakpoint
CREATE TABLE `participant` (
	`id` text PRIMARY KEY NOT NULL,
	`amount` integer,
	`event_id` text,
	`item_id` text
);
--> statement-breakpoint
CREATE TABLE `participant_item` (
	`id` text PRIMARY KEY NOT NULL,
	`amount` integer,
	`participant_id` text,
	`item_id` text
);
