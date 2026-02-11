INSERT INTO tickets (
  customer_id,
  title,
  description,
  completed,
  tech,
  created_at,
  updated_at
)
VALUES

(1, 'Laptop not powering on', 'Customer reported that their laptop does not turn on at all.', false, 'Mike', now(), now()),
(1, 'Slow computer performance', 'Customer mentioned that their computer has been running very slowly.', false, 'Sarah', now(), now()),
(1, 'Virus removal', 'Customer needs virus removal service for their laptop.', true, 'Alex', now(), now()),
(2, 'Screen replacement', 'Customer needs to replace a cracked laptop screen.', false, 'John', now(), now()),
(2, 'Data recovery', 'Customer accidentally deleted important files and needs data recovery.', false, 'Emily', now(), now()),
(2, 'Software installation', 'Customer requested installation of required business software.', true, 'Chris', now(), now()),
(3, 'Wi-Fi connectivity issues', 'Customer is experiencing problems connecting to Wi-Fi.', false, 'Anna', now(), now()),
(3, 'Keyboard not working', 'Customer reported that the keyboard is not responding.', true, 'David', now(), now()),
(3, 'Overheating problem', 'Customer’s computer is overheating and shutting down unexpectedly.', false, 'Tom', now(), now()),
(4, 'Hard drive replacement', 'Customer needs to replace a failing hard drive.', false, 'Kevin', now(), now()),
(4, 'Operating system upgrade', 'Customer requested an upgrade to the latest operating system.', true, 'Laura', now(), now()),
(4, 'Battery replacement', 'Customer needs a replacement for their laptop battery.', true, 'Jason', now(), now()),
(5, 'Printer setup', 'Customer needs help setting up a new printer.', false, 'Emma', now(), now()),
(5, 'Blue screen error', 'Customer’s computer is showing a blue screen error frequently.', false, 'Brian', now(), now()),
(5, 'Memory upgrade', 'Customer requested an upgrade to their computer memory.', true, 'Sophia', now(), now());
